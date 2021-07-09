import React, { Component } from 'react'

import BookBoxLogo500 from '../assets/images/bookbox_L500.png'
import '../css/components/LoginForm.css'

export class LoginForm extends Component {
    render() {
        return (
            <form className="form-signin">
                <img src={BookBoxLogo500} alt="logo BookBox"/>
                <h1 className="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>
                
                <label htmlFor="inputEmail" className="sr-only">Correo electronico</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo electronico" required autoFocus />
                
                <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
            </form>
        )
    }
}

export default LoginForm
