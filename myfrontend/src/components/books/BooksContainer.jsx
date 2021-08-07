import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import BooksApi from 'services/books.service'
import { getBooks } from 'actions'

import BookCard from 'components/books/BookCard'
import Loading from 'components/misc/Loading'

const mapStateToProp = state => {
    return {
        books: state.books,
    }
}

const mapDispatchToProps = {
    getBooks,
}

function BooksContainer(props) {
    const { books } = props
    const [loading, setLoading] = useState(true)

    const fetchBooks = async () => {
        const booksApi = new BooksApi()
        const fetchedBooks = await booksApi.getBooks()
        props.getBooks(fetchedBooks.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchBooks()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />

    return (
        <section className='row row-cols-1 row-cols-md-2 g-4'>
            {books ? (
                books.map(book => <BookCard key={book._id} book={book} />)
            ) : (
                <p>No encontramos libros</p>
            )}
        </section>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(BooksContainer)
