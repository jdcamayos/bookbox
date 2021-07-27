import { connect } from 'react-redux'
import HeaderPage from '../components/misc/HeaderPage'
import CardBook from '../components/CardBook'
const mapStateToProp = state => {
    return {
        user: state.user,
        myBooks: state.myBooks,
        books: state.books,
    }
}

function UserProfile({ user, myBooks, books }) {
    const bookExists = Boolean(myBooks.length)
    return (
        <main className='container'>
            <HeaderPage
                title={`Bienvenido,
                ${user?.firstName ? `${user.firstName} ${user.lastName}` : ''}`}
            />
            <div>
                <h2>Mis Libros</h2>
                <section className='row row-cols-1 row-cols-md-2 g-4'>
                    {bookExists ? (
                        myBooks.map((book, index) => (
                            <CardBook key={index} book={book} />
                        ))
                    ) : (
                        <p>No encontramos libros para mostrar</p>
                    )}
                </section>
            </div>
            <div>
                <h2>Estos son tus libros recomendados</h2>
                <section className='row row-cols-1 row-cols-md-2 g-4'>
                    {books.map((book, index) => (
                        <CardBook key={index} book={book} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default connect(mapStateToProp, null)(UserProfile)
