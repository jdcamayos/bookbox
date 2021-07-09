import React, { Component } from 'react'

import BookBoxLogo500 from '../assets/images/bookbox_L500.png'
import '../css/components/RegisterForm.css'

export class RegisterForm extends Component {
    render() {
        return (
            <form className="form-signup">
                <img src={BookBoxLogo500} alt="logo BookBox"/>
                <h1 className="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>
                
                <label htmlFor="inputFirstName" className="sr-only">Nombres</label>
                <input type="text" id="inputFirstName" className="form-control" placeholder="Nombres" required autoFocus />
                
                <label htmlFor="inputLastName" className="sr-only">Apellidos</label>
                <input type="text" id="inputLastName" className="form-control" placeholder="Apellidos" required  />
                
                <label htmlFor="inputEmail" className="sr-only">Correo electronico</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo electronico" required  />
                
                <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />

                <label htmlFor="inputPasswordConfirm" className="sr-only">Repita su contraseña</label>
                <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Repita su contraseña" required />
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="terms" /> Acepto terminos y condiciones
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
                {/* <p className="mt-5 mb-3 text-muted">&copy; { new Date().getFullYear() }</p> */}
            </form>
        )
    }
}

export default RegisterForm
