import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'

const mapStateToProp = state => {
    return {
        myBooks: state.myBooks,
    }
}
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

function CardBook(props) {
    const { book, myBooks } = props
    const { _id, title, cover, description } = book
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (myBooks.length === 0) return
        const bookInList = myBooks.filter(book => book._id === _id)
        if (Boolean(bookInList.length)) {
            setIsFavorite(true)
        }
    }, [_id, myBooks])

    const handleSetFavorite = () => {
        setIsFavorite(true)
        props.setFavorite({
            _id,
            title,
            cover,
            description,
        })
    }

    const handleDeleteFavorite = () => {
        setIsFavorite(false)
        props.deleteFavorite(_id)
    }
    return (
        <article className='col'>
            <div
                className='card bg-dark text-light mb-3'
                style={{ maxWidth: '530px' }}
            >
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img
                            src={cover}
                            className='img-fluid rounded-start'
                            alt={title}
                        />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title text-warning'>{title}</h5>
                            <p className='card-text'>{description}</p>

                            {/* <p className='card-text'>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </p> */}
                        </div>
                        <div className='card-footer text-center'>
                            {isFavorite ? (
                                <button
                                    className='btn btn-outline-danger'
                                    onClick={handleDeleteFavorite}
                                >
                                    Eliminar
                                </button>
                            ) : (
                                <button
                                    className='btn btn-warning mx-3'
                                    onClick={handleSetFavorite}
                                >
                                    Agregar a mis libros
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(CardBook)
