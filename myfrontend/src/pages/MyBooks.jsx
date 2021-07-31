import { connect } from 'react-redux'
// import CardBook from 'components/CardBook'
import HeaderPage from 'components/misc/HeaderPage'

const mapStateToProps = state => {
    return {
        myBooks: state.myBooks,
    }
}

function MyBooks(props) {
    const { myBooks } = props
    const bookExists = Boolean(myBooks.length)
    return (
        <main className='container'>
            <HeaderPage title='Mis Libros' />
            <section className='row row-cols-1 row-cols-md-2 g-4'>
                {bookExists ? (
                    myBooks.map(book => (
                        <p key={book._id}>{book._id}</p>
                        // <CardBook key={index} book={book} />
                    ))
                ) : (
                    <p>No encontramos libros para mostrar</p>
                )}
            </section>
        </main>
    )
}

export default connect(mapStateToProps, null)(MyBooks)
