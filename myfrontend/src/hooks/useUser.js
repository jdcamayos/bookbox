import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setUser, updateUser, deleteUser } from 'actions'
import UsersApi from 'services/users.service'

const userModel = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    isAdmin: false,
}


function useUser() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(user)
    const [redirect, setRedirect] = useState(false)
    
    const dispatch = useDispatch()
    const usersApi = new UsersApi()

    const action = type => {
        if(type === 'create') {
            delete form._id
            delete form.repeatPassword
            let res = await usersApi.createUser(form)
            console.log(res.message)
            if(res.data) {
                dispatch(setUser(form))
            }
            setLoading(false)
            setRedirect(false)
        }
    
        if(type === 'update') {
            delete form._id
            delete form.repeatPassword
            let res = await usersApi.updateUser()
            console.log(res.message)
            if(res.data) {
                dispatch(updateUser(form))
            }
            setLoading(false)
            setRedirect(false)
        }
    
        if(type === 'delete') {
            let res = await usersApi.deleteUser({ userId: form._id })
            console.log(res.message)
            if(res.data) {
                dispatch(deleteUser(form._id))
            }
            setLoading(false)
            setRedirect(false)
        }
    }


    return { loading, form, setForm, action, redirect }
}

export default useUser
