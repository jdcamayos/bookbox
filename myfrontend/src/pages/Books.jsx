import BooksContainer from 'components/books/BooksContainer'
import HeaderPage from 'components/misc/HeaderPage'

function Books() {
    return (
        <main className='container'>
            <HeaderPage title='Libros'>
                {/* <form className='d-flex'>
                    <input
                        type='search'
                        className='form-control me-2  alert-warning'
                        placeholder='Buscar un libro'
                    />
                    <button className='btn btn-outline-dark' type='submit'>
                        Buscar
                    </button>
                </form> */}
            </HeaderPage>
            <BooksContainer />
        </main>
    )
}

export default Books
