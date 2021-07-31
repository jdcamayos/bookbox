import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import HeaderPage from 'components/misc/HeaderPage'
import Loading from 'components/Loading'
import CardBook from 'components/CardBook'

import { getBooks, getUserBooks } from 'actions'
import BooksApi from 'api/books'
import UserBooksApi from 'api/userBooks'

const mapStateToProp = state => {
    return {
        user: state.user,
        myBooks: state.myBooks,
        books: state.books,
    }
}

const mapDispatchToProps = {
    getBooks,
    getUserBooks,
}

function UserProfile(props) {
    const { user, myBooks, books } = props

    const [loading, setLoading] = useState(false)

    const fetchBooks = async () => {
        // if (books.length > 0) {
        //     return
        // }
        const booksApi = new BooksApi()
        const fetchedBooks = await booksApi.getBooks()
        props.getBooks(fetchedBooks)
    }

    const fetchUserBooks = async () => {
        // if (myBooks.length > 0) {
        //     return
        // }
        const userBooksApi = new UserBooksApi()
        const fetchedUserBooks = await userBooksApi.getUserBooks({
            userId: user._id,
        })
        props.getUserBooks(fetchedUserBooks)
    }

    useEffect(() => {
        setLoading(true)
        fetchBooks()
        fetchUserBooks()
        setLoading(false)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className='container'>
            <HeaderPage
                title={`Bienvenido,
                ${user?.firstName ? `${user.firstName} ${user.lastName}` : ''}`}
            />
            <div>
                <h2>Mis Libros</h2>
                <section className='row row-cols-1 row-cols-md-2 g-4'>
                    {loading ? (
                        <Loading />
                    ) : myBooks?.length ? (
                        myBooks.map(book => (
                            // <p key={book._id}>{book._id}</p>
                            <CardBook key={book._id} bookId={book.bookId} isUserBook/>
                        ))
                    ) : (
                        <p>No encontramos libros para mostrar</p>
                    )}
                </section>
            </div>
            <div>
                <h2>Estos son tus libros recomendados</h2>
                <section className='row row-cols-1 row-cols-md-2 g-4'>
                    {loading ? (
                        <Loading />
                    ) : books?.length ? (
                        books.map(book => (
                            // <p key={book._id}>{book._id}</p>
                            <CardBook key={book._id} bookId={book._id} />
                        ))
                    ) : (
                        <p>No encontramos libros para mostrar</p>
                    )}
                    {/* ToDo:
                        Make function to fetch random books
                    */}
                </section>
            </div>
        </main>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(UserProfile)
