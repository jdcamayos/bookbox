import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className='container-fluid bg-dark'>
            <section
                className='d-flex justify-content-center align-items-center flex-column mx-auto text-light flex-'
                style={{ height: '60vh' }}
            >
                <h1
                    className='text-warning animate__animated animate__pulse animate__infinite 	infinite'
                    style={{ fontSize: '100px' }}
                >
                    404
                </h1>
                <p>Lo sentimos, no encontramos esta ruta</p>
                <Link to='/home' className='text-warning'>
                    Volver al Inicio
                </Link>
            </section>
        </main>
    )
}
