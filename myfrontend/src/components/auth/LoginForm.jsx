import { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { loginRequest } from '../../actions'
import Loading from '../Loading'

const mapDispatchToProps = {
    loginRequest,
}

function LoginForm(props) {
    const [form, setValues] = useState({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const [message, setMessage] = useState('')

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const res = await signIn(form)
        if (res) {
            props.history.push('/profile')
        }
    }

    const signIn = async form => {
        const URL = 'http://localhost:4000/api/auth/sign-in/'
        setLoading(true)
        try {
            const { data, status } = await axios.post(URL, form)
            setLoading(false)
            if (status === 205) {
                setMessage(
                    <div className='card-footer text-muted'>
                        Usuario no encontrado
                    </div>
                )
                return false
            }
            if (status === 206) {
                setMessage(
                    <div className='card-footer text-muted'>
                        Contraseña incorrecta
                    </div>
                )
                return false
            }
            if (status === 200) {
                props.loginRequest(data)
                return true
            }
            return false
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className='d-flex justify-content-center text-light bg-dark'>
            <form
                className='text-center card text-light bg-dark mb-3'
                style={{ maxWidth: '280px' }}
                onSubmit={handleSubmit}
            >
                <div className='card-header bg-dark h3 mb-3'>Inicia sesión</div>
                <div className='mb-3'>
                    <input
                        name='email'
                        type='email'
                        className='form-control bg-warning'
                        placeholder='Tu correo electronico'
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        name='password'
                        type='password'
                        className='form-control bg-warning'
                        placeholder='Tu contraseña'
                        onChange={handleInput}
                    />
                </div>
                <button type='submit' className='btn btn-warning'>
                    Ingresar
                </button>
                {loading ? <Loading /> : message}
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(LoginForm)
