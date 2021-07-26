import { connect } from 'react-redux'
import CardBook from '../components/CardBook'
import HeaderPage from '../components/misc/HeaderPage'

const mapStateToProp = state => {
    return {
        books: state.books,
    }
}

function Books({ books }) {
    return (
        <main className='container'>
            <HeaderPage title='Libros'>
                <form className='d-flex'>
                    <input
                        type='search'
                        className='form-control me-2  alert-warning'
                        placeholder='Buscar un libro'
                    />
                    <button className='btn btn-outline-dark' type='submit'>
                        Buscar
                    </button>
                </form>
            </HeaderPage>
            <section className='row row-cols-1 row-cols-md-2 g-4'>
                {books.map((book, index) => (
                    <CardBook key={index} book={book} />
                ))}
            </section>
            {/* ToDo: Pagination y Lazy Load */}
        </main>
    )
}

export default connect(mapStateToProp, null)(Books)
