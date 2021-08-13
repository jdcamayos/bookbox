import { Link } from 'react-router-dom'

import Loading from 'components/misc/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminBooksTable from 'components/admin/books/AdminBooksTable'
import AdminBookEditModal from './AdminBookEditModal'

import useBooks from 'hooks/useBooks'

function AdminBooks() {
    const { books, loading } = useBooks()

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title='Administación de libros'>
                <Link to='/admin' className='btn btn-outline-dark mx-3'>
                    Atras
                </Link>
                <AdminBookEditModal isNew />
            </HeaderPage>
            <AdminBooksTable books={books} />
        </main>
    )
}

export default AdminBooks
