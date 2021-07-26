import { connect } from 'react-redux'
import CardBook from '../components/CardBook'

const mapStateToProp = state => {
    return {
        books: state.books,
    }
}

function Books({ books }) {
    return (
        <main className='container'>
            <section className='card m-2 bg-warning'>
                <div className='card-body'>
                    <h1>Libros</h1>
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
                </div>
            </section>
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
