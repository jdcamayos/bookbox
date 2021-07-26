import { Link } from 'react-router-dom'

function CardAdmin(props) {
    const { children, title, route } = props
    return (
        <article className='card text-white bg-dark mb-3'>
            <div className='card-header text-center'>{children}</div>
            <div className='card-body'>
                <h5 className='card-title text-center'>{title}</h5>
                <p className='card-text text-center'>
                    <Link className='btn btn-warning' to={route}>
                        Administrar
                    </Link>
                </p>
            </div>
        </article>
    )
}

export default CardAdmin
