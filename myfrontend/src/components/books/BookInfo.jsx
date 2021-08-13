import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import Loading from 'components/misc/Loading'

import BooksApi from 'services/books.service'
import HeaderPage from 'components/misc/HeaderPage'
import BookButton from './BookButton'

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

function BookInfo() {
    const { bookId } = useParams()
    const [loading, setLoading] = useState(true)
    const [book, setBook] = useState({})

    const fetchBook = async () => {
        const booksApi = new BooksApi()
        const { data } = await booksApi.getBook({ bookId })
        setBook(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchBook()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title={book.title} />
            <section className='row p-3'>
                <article className='col-12 col-md-6 '>
                    <img
                        src={book.cover}
                        alt={book.title}
                        className='rounded-3'
                        style={{ maxWidth: '40vw', maxHeight: '60vh' }}
                    />
                </article>
                <article className='col-12 col-md-6'>
                    <h3 className='h3'>
                        <strong>Descripción</strong>
                    </h3>
                    <p>{book.description}</p>
                    <BookButton bookId={bookId} />
                </article>
            </section>
        </main>
    )
}

export default connect(mapStateToProps, null)(BookInfo)
