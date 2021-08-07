import { Link } from 'react-router-dom'

function BookCard(props) {
    const { _id, title, cover, description } = props.book
    return (
        <article className='col'>
            <div className='card bg-dark text-light mb-3 card-book'>
                <div className='row g-0'>
                    <div className='col-md-4 card-book-img'>
                        <img
                            src={cover}
                            className='img-fluid rounded-start'
                            alt={title}
                        />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body card-body-book'>
                            <h5 className='card-title text-warning'>{title}</h5>
                            <p className='card-text'>{description}</p>
                        </div>
                        <div className='card-footer text-center'>
                            <Link
                                to={'/book/' + _id}
                                className='btn btn-warning mx-3 w-100'
                            >
                                Ver mas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BookCard
