import BookCard from 'components/books/BookCard'
import Loading from 'components/misc/Loading'
import useBooks from 'hooks/useBooks'

function BooksContainer() {
    const { books, loading } = useBooks()

    if (loading) return <Loading />

    return (
        <section className='row row-cols-1 row-cols-md-2 g-4'>
            {books ? (
                books.map(book => <BookCard key={book._id} book={book} />)
            ) : (
                <p>No encontramos libros</p>
            )}
        </section>
    )
}

export default BooksContainer
