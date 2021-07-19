import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import BookBoxLogo500 from '../../assets/images/bookbox_L500.png'
import { AuthContext } from '../../auth/AuthContext'
import '../../css/components/LoginForm.css'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginForm = () => {

    const { dispatch } = useContext(AuthContext)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues;

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault()
        // history.push('/');
        // history.replace('/');


        if (email === "brayan.marin") {

            dispatch({
                type: types.login,
                payload: {
                    name: "Brayan Marin"
                }
            })
            // history.replace('/');
            history.replace('/')
        } else {
            console.log("no se logueo")
        }




    }




    return (
        <div className="d-flex">
            <form className="form-signin" >
                <img src={BookBoxLogo500} alt="logo BookBox" />
                <h1 className="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>

                <label htmlFor="inputEmail" className="sr-only">Correo electronico</label>
                <input
                    type="email"
                    name="email"
                    // id="inputEmail"
                    className="form-control"
                    placeholder="Correo electronico"
                    onChange={handleInputChange}
                    value={email}
                />

                <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    // id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"

                    onChange={handleInputChange}
                    value={password}

                />

                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={handleLogin}
                >
                    Iniciar sesión
                </button>
            </form>
        </div>

    )
}
