import { useState } from 'react'
import { connect } from 'react-redux'
import AuthApi from 'services/auth.service'
import { loginRequest } from 'actions'
import Loading from 'components/misc/Loading'

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
        setLoading(true)
        const authApi = new AuthApi()
        const data = await authApi.signIn(form)
        setLoading(false)
        if (data.token && data.user) {
            props.loginRequest(data)
            props.history.push('/profile')
            window.localStorage.setItem('tokenSession', data.token)
        }
        if (data.message) {
            setMessage(data.message)
        }
    }

    return (
        <div className='d-flex justify-content-center text-light bg-dark'>
            <form
                className='text-center card text-light bg-dark mb-3 border-0'
                style={{ maxWidth: '280px' }}
                onSubmit={handleSubmit}
            >
                <div className='card-header bg-dark h3 mb-3 border-0'>
                    Inicia sesión
                </div>
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
                {loading ? (
                    <Loading />
                ) : (
                    <div className='card-footer text-muted'>{message}</div>
                )}
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(LoginForm)
