import { connect } from 'react-redux'

const mapStateToProp = state => {
    return {
        user: state.user,
        myBooks: state.myBooks,
        books: state.books,
    }
}

function UserProfile({ user, myBooks, books }) {
    console.log(user ? user : 'No existe', myBooks.length, books)
    return (
        <main>
            <h1>This is the profile page</h1>
            <h3>Info del usuario</h3>
            <p>{user?.auth ? user : 'No usuario'}</p>
            <h3>Info de mis libros</h3>
            <div>
                {myBooks.length
                    ? myBooks.map((book, index) => (
                          <p key={index}>{book.title}</p>
                      ))
                    : 'There are no my books'}
            </div>
            <h3>Todos los libros</h3>
            <div>
                {books.length
                    ? books.map((book, index) => (
                          <p key={index}>{book.title}</p>
                      ))
                    : 'There are no books'}
            </div>
        </main>
    )
}

export default connect(mapStateToProp, null)(UserProfile)
