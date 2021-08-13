import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import jwt from 'jsonwebtoken'

import { loginRequest } from 'actions'
import AuthApi from 'services/auth.service'

function useToken() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    
    const reloadSession = async () => {
        console.log('Verifying token status...')
        if (window.localStorage.getItem('tokenSession')) {
            const decodedToken = jwt.decode(
                window.localStorage.getItem('tokenSession')
            )
            const tokenExp = decodedToken.exp * 1000
            // Verifying token expired time
            if (new Date().getTime() > tokenExp) {
                tokenExpired()
                return
            }
            // Renewed token
            if (new Date().getTime() < tokenExp) {
                await tokenRequest()
                return
            }
        } else {
            tokenExpired()
            return
        }
    }

    const tokenExpired = () => {
        console.log('Token expired or non-existent')
        setLoading(false)
    }

    const tokenRequest = async () => {
        const authApi = new AuthApi()
        const data = await authApi.verifyToken()
        if (data.token && data.user) {
            dispatch(loginRequest(data))
            window.localStorage.setItem('tokenSession', data.token)
            console.log('Token renewed')
        }
        setLoading(false)
    }

    useEffect(() => {
        reloadSession()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { loading }
}

export default useToken
