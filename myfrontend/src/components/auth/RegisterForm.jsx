import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthApi from 'services/auth.service'
import { registerRequest } from 'actions'
import Loading from 'components/misc/Loading'

const mapDispatchToProps = {
    registerRequest,
}

function RegisterForm(props) {
    const { isModal } = props
    const history = useHistory()
    const [form, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: '',
    })
    const [showPass, setShowPass] = useState(false)
    const [formErrors, setFormErrors] = useState([])
    const [samePassword, setSamePassword] = useState(true)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const errors = [
        form.firstName.length > 2
            ? null
            : 'Nombre debe ser mayor a 2 caracteres',
        form.lastName.length > 2
            ? null
            : 'Apellido debe ser mayor a 2 caracteres',
        form.email.includes('.') ? null : 'El correo no es valido',
        form.email.includes('@') ? null : 'El correo no es valido',
        form.password.length > 3
            ? null
            : 'La contraseña debe contener al menos 4 caracteres',
        form.password === form.passwordRepeat
            ? null
            : 'Contraseñas no coinciden',
    ]
    const verifyForm = () => {
        setSamePassword(form.password === form.passwordRepeat)
        const filteredErrors = errors.filter(error => error !== null)
        setFormErrors(filteredErrors)
        return filteredErrors
    }
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const isVerified = await verifyForm()
        if (!isVerified.length) {
            delete form.passwordRepeat
            setLoading(true)
            const authApi = new AuthApi()
            const data = await authApi.signUp(form)
            setLoading(false)
            if (data.token && data.user) {
                console.log(data)
                props.registerRequest(data)
                history.push('/profile')
                window.localStorage.setItem('tokenSession', data.token)
                // window.localStorage.setItem(
                //     'userSession',
                //     JSON.stringify(data.user)
                // )
            }
            if (data.message) {
                setMessage(data.message)
            }
        }
    }

    return (
        <div
            className={`d-flex justify-content-center text-light ${
                isModal ? '' : 'bg-dark'
            }`}
        >
            <form
                onSubmit={handleSubmit}
                className={`text-center card text-light border-0 ${
                    isModal ? '' : 'bg-dark'
                } mb-3`}
                style={{ maxWidth: '280px' }}
            >
                {isModal ? null : (
                    <div className='card-header bg-dark h3 mb-3 border-0'>
                        Registrate
                    </div>
                )}
                <div className='mb-3'>
                    <input
                        name='firstName'
                        type='text'
                        className={`form-control ${
                            isModal ? 'bg-grey' : 'bg-warning'
                        }`}
                        placeholder='Tu nombre'
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        name='lastName'
                        type='text'
                        className={`form-control ${
                            isModal ? '' : 'bg-warning'
                        }`}
                        placeholder='Tu apellido'
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        name='email'
                        type='email'
                        className={`form-control ${
                            isModal ? '' : 'bg-warning'
                        }`}
                        placeholder='Tu correo electronico'
                        onChange={handleInput}
                    />
                </div>
                <div className='input-group mb-3'>
                    <input
                        name='password'
                        type={showPass ? 'text' : 'password'}
                        className={`form-control  ${
                            samePassword
                                ? isModal
                                    ? ''
                                    : 'bg-warning'
                                : 'border-danger bg-danger'
                        }`}
                        placeholder='Tu contraseña'
                        onChange={handleInput}
                    />
                    <button
                        className={`btn btn-outline-${
                            showPass ? 'danger' : 'secondary'
                        }`}
                        type='button'
                        onClick={handleShowPass}
                    >
                        {showPass ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                className='bi bi-eye-slash-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z' />
                                <path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z' />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                className='bi bi-eye-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
                                <path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />
                            </svg>
                        )}
                    </button>
                </div>
                <div className='input-group mb-3'>
                    <input
                        name='passwordRepeat'
                        type={showPass ? 'text' : 'password'}
                        className={`form-control  ${
                            samePassword
                                ? isModal
                                    ? ''
                                    : 'bg-warning'
                                : 'border-danger bg-danger'
                        }`}
                        placeholder='Tu contraseña'
                        onChange={handleInput}
                    />
                    <button
                        className={`btn btn-outline-${
                            showPass ? 'danger' : 'secondary'
                        }`}
                        type='button'
                        onClick={handleShowPass}
                    >
                        {showPass ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                className='bi bi-eye-slash-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z' />
                                <path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z' />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                className='bi bi-eye-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
                                <path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />
                            </svg>
                        )}
                    </button>
                </div>
                {formErrors.length
                    ? formErrors.map((error, index) => (
                          <p className='h6' key={index}>
                              {error}
                          </p>
                      ))
                    : ''}
                {isModal ? (
                    <button type='submit' className='btn btn-warning'>
                        Crear usuario
                    </button>
                ) : (
                    <button type='submit' className='btn btn-warning'>
                        Registrar
                    </button>
                )}
                {loading ? (
                    <Loading />
                ) : (
                    <div className='card-footer text-muted'>{message}</div>
                )}
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(RegisterForm)
