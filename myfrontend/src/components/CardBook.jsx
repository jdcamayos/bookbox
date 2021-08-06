import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUserBook, deleteUserBook } from 'actions'

import UserBooksApi from 'services/userBooks.service'

const mapStateToProp = state => {
    return {
        user: state.user,
        books: state.books,
        myBooks: state.myBooks,
    }
}
const mapDispatchToProps = {
    setUserBook,
    deleteUserBook,
}

function CardBook(props) {
    const { user, bookId, books, myBooks, isUserBook, userBookId } = props
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

    const handleSetUserBook = async () => {
        const userBooksApi = new UserBooksApi()
        const createdUserBookId = await userBooksApi.createUserBook({
            userId: user._id,
            bookId,
        })
        if (createdUserBookId) {
            // console.log(createdUserBookId)
            props.setUserBook({
                userBookId: createdUserBookId,
                userId: user.id,
                bookId
            })
        }
    }

    const handleDeleteUserBook = async () => {
        if(!isUserBook) {
            return
        }
        if(userBookId) {
            console.log(userBookId)
            const userBooksApi = new UserBooksApi()
            const deletedUserBook = await userBooksApi.deleteUserBook({
                userBookId,
            })
            
            if (deletedUserBook) {
                console.log(deletedUserBook)
                props.deleteUserBook(deleteUserBook)
            }
        }
    }

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
                                    className='btn btn-danger mx-3'
                                    onClick={handleDeleteUserBook}
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
                                    onClick={handleSetUserBook}
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
