import { connect } from 'react-redux'
import CardBook from '../components/CardBook'
const mapStateToProp = state => {
    return {
        user: state.user,
        myBooks: state.myBooks,
        books: state.books,
    }
}

function UserProfile({ user, myBooks, books }) {
    return (
        <main className='container'>
            <h1>
                Bienvenido,{' '}
                {user?.firstName ? `${user.firstName} ${user.lastName}` : ''}
            </h1>
            <div>
                <h2>Mis favoritos</h2>
                {/* {myBooks.length
                    ? myBooks.map((book, index) => (
                          <CardBook
                              key={index}
                              title={book.title}
                              cover={book.cover}
                              description={book.description}
                          />
                      ))
                    : 'No tienes libros favoritos'} */}
            </div>
            <div>
                <h2>Estos son tus libros recomendados</h2>
                <section className='row row-cols-1 row-cols-md-2 g-4'>
                    {/* {books.map((book, index) => (
                        <CardBook
                            key={index}
                            title={book.title}
                            cover={book.cover}
                            description={book.description}
                        />
                    ))} */}
                </section>
            </div>
        </main>
    )
}

export default connect(mapStateToProp, null)(UserProfile)
