import HeaderPage from 'components/misc/HeaderPage'
import UserBooksContainer from 'components/books/UserBooksContainer'

function MyBooks() {
    return (
        <main className='container'>
            <HeaderPage title='Mis Libros' />
            <UserBooksContainer />
        </main>
    )
}

export default MyBooks
