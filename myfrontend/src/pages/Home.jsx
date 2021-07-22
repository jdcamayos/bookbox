import { useState } from 'react'

import HomeCarousel from '../components/home/HomeCarousel'

import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

import BookBoxL500 from '../assets/bookbox_L500.png'

export default function Home(props) {
    const [register, setRegister] = useState(false)

    const handleRegister = () => setRegister(!register)

    return (
        <main
            className="container-fluid m-0 p-0"
            style={{ maxWidth: '100vw', overflowX: 'hidden' }}
        >
            <div className="row">
                <section
                    className="col-12 col-lg-8 m-0 p-0"
                    style={{ maxHeight: '85vh', overflow: 'hidden' }}
                >
                    <HomeCarousel />
                </section>
                <section className="col-12 col-lg-4 pt-5 bg-warning m-0 p-0">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div
                            className="card bg-dark text-light rounded-3 p-3  text-center"
                            style={{ maxWidth: '300px', width: '300px'}}
                        >
                            <span
                                className="card-img-top bg-warning rounded-circle mb-3"
                                style={{
                                    maxWidth: '100px',
                                    maxHeight: '100px',
                                    alignSelf: 'center'
                                }}
                            >
                                <img
                                    src={BookBoxL500}
                                    alt="Logo"
                                    height="70px"
                                    width="70px"
                                    className="mx-auto my-3"
                                />
                            </span>
                            {register ? (
                                <>
                                    <RegisterForm {...props} />
                                    <p>
                                        ¿Ya tienes un usuario?.
                                        <button
                                            type="button"
                                            onClick={handleRegister}
                                            className="btn link-warning"
                                        >
                                            Inicia sesión
                                        </button>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <LoginForm {...props}/>
                                    <p>
                                        ¿No tienes usuario?.
                                        <button
                                            type="button"
                                            onClick={handleRegister}
                                            className="btn link-warning"
                                        >
                                            Registrate
                                        </button>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
