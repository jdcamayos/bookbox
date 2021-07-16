import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import BookBoxLogo500 from '../../assets/images/bookbox_L500.png'
import { AuthContext } from '../../auth/AuthContext'
import '../../css/components/LoginForm.css'
import { types } from '../../types/types'

export const LoginForm = () => {

    const {dispatch} = useContext(AuthContext)

    const history =  useHistory();

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/');

        dispatch ({
            type: types.login,
            payload:{
                name: 'brayan'
            }
        })
        // history.replace('/');
        history.replace('/')
    }


    return (
        <form className="form-signin">
            <img src={BookBoxLogo500} alt="logo BookBox" />
            <h1 className="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>

            <label htmlFor="inputEmail" className="sr-only">Correo electronico</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Correo electronico" required autoFocus />

            <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />

            <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick={handleLogin}
            >
                Iniciar sesión
            </button>
        </form>

    )
}
