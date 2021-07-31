import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUserBook, deleteUserBook } from 'actions'

const mapStateToProp = state => {
    return {
        books: state.books,
        myBooks: state.myBooks,
    }
}
const mapDispatchToProps = {
    setUserBook,
    deleteUserBook,
}

function CardBook(props) {
    const { bookId, books, myBooks, isUserBook } = props
    const [isFavorite, setIsFavorite] = useState(false)

    const [book] = books.filter(item => item._id === bookId)
    const { title, cover, description } = book

    useEffect(() => {
        const [bookFavorite] = myBooks.filter(item => item.bookId === bookId)
        return () => {
            // console.log(bookFavorite)
            if (bookFavorite) {
                setIsFavorite(true)
            }
        }
    }, [myBooks, bookId]) // eslint-disable-line react-hooks/exhaustive-deps
    // if(bookFavorite) {
    // }
    // const handleSetFavorite = () => {
    //     setIsFavorite(true)
    //     props.setUserBook({
    //         _id,
    //     })
    // }

    // const handleDeleteFavorite = () => {
    //     setIsFavorite(false)
    //     props.deleteUserBook(_id)
    // }
    return (
        <article className='col'>
            <div
                className='card bg-dark text-light mb-3'
                style={{ maxWidth: '530px' }}
            >
                <div className='row g-0'>
                    <div className='col-md-4 card-book-img'>
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
                            {isUserBook ? (
                                <button
                                    className='btn btn-warning mx-3'
                                    // onClick={handleSetFavorite}
                                >
                                    Eliminar de mis libros
                                </button>
                            ) : isFavorite ? (
                                <p className='text-warning'>
                                    Este libro ya es tuyo
                                </p>
                            ) : (
                                <button
                                    className='btn btn-warning mx-3'
                                    // onClick={handleSetFavorite}
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
