import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import jwt from 'jsonwebtoken'

import { loginRequest } from 'actions'
import AuthApi from 'services/auth.service'
import moment from 'moment'

function useToken() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const reloadSession = async () => {
        if (window.localStorage.getItem('tokenSession')) {
            const decodedToken = jwt.decode(
                window.localStorage.getItem('tokenSession')
            )
            console.log(moment(decodedToken.iat * 1000).format('LT'))
            console.log(moment(new Date()).format('LT'))
            console.log(moment(decodedToken.exp * 1000).format('LT'))
            if (new Date().getTime() > decodedToken.exp * 1000) {
                console.log('Tu sesion ha expirado')
                setLoading(false)
                return { loading, auth: false }
            }
            const authApi = new AuthApi()
            const data = await authApi.verifyToken()
            if (data.token && data.user) {
                dispatch(loginRequest(data))
                window.localStorage.setItem('tokenSession', data.token)
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        reloadSession()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { loading, auth: true }
}

export default useToken
