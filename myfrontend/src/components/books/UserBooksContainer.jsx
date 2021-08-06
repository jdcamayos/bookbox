import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import BooksApi from 'services/books.service'
import UserBooksApi from 'services/userBooks.service'
import { getBooks, getUserBooks } from 'actions'

import BookCard from 'components/books/BookCard'
import Loading from 'components/misc/Loading'

const mapStateToProps = state => {
    return {
        user: state.user,
        books: state.books,
        myBooks: state.myBooks,
    }
}

const mapDispatchToProps = {
    getBooks,
    getUserBooks,
}

function UserBooksContainer(props) {
    const [myBooksData, setMyBooksData] = useState([])
    const { books, myBooks, user } = props
    const [loading, setLoading] = useState(true)

    const fetchBooks = async () => {
        const booksApi = new BooksApi()
        const res = await booksApi.getBooks()
        console.log(res.message)
        return res.data
    }

    const fetchMyBooks = async () => {
        const userBooksApi = new UserBooksApi()
        const res = await userBooksApi.getUserBooks({
            userId: user._id,
        })
        console.log(res.message)
        return res.data
    }

    const fetchDataForMyBooks = () => {
        const userBooksIds = myBooks.map(myBook => myBook.bookId)
        const fetchMyBooksData = books.filter(book =>
            userBooksIds.includes(book._id)
        )
        setMyBooksData(fetchMyBooksData)
        setLoading(false)
    }

    const fetchData = async () => {
        await Promise.all([fetchBooks(), fetchMyBooks()]).then(
            ([fetchedBooks, fetchedMyBooks]) => {
                props.getBooks(fetchedBooks)
                props.getUserBooks(fetchedMyBooks)
            }
        )
    }

    useEffect(() => {
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (books && books.length) {
            fetchDataForMyBooks()
        }
    }, [myBooks]) // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />

    return (
        <section className='row row-cols-1 row-cols-md-2 g-4'>
            {myBooksData ? (
                myBooksData.map(book => <BookCard key={book._id} book={book} />)
            ) : (
                <p>No tienes libros aun...</p>
            )}
        </section>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooksContainer)
