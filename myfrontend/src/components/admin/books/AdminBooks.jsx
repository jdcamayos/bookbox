import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Loading from 'components/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminBooksTable from 'components/admin/books/AdminBooksTable'
import AdminBookEditModal from './AdminBookEditModal'

import { getBooks } from 'actions'
import BooksApi from 'api/books'

const mapStateToProp = state => {
    return {
        books: state.books,
    }
}

const mapDispatchToProps = {
    getBooks,
}

function AdminBooks(props) {
    // const { books } = props
    const [loading, setLoading] = useState(true)

    const fetchBooks = async () => {
        // if (books.length > 0) {
        //     return
        // }
        const booksApi = new BooksApi()
        const fetchedBooks = await booksApi.getBooks()
        props.getBooks(fetchedBooks)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchBooks()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className='container'>
            <HeaderPage title='Administación de libros'>
                <AdminBookEditModal isNew />
            </HeaderPage>

            {loading ? <Loading /> : <AdminBooksTable />}
        </main>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(AdminBooks)
