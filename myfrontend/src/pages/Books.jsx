import CardBook from '../components/CardBook'
import { books } from '../data/books'

const myBooks = books.splice(0, 10)

export default function Books() {
    return (
        <main className='container'>
            <h1 className='mt-3'>Libros</h1>
            <section className='row row-cols-1 row-cols-md-2 g-4'>
                {myBooks.map((book, index) => (
                    <CardBook
                        key={index}
                        title={book.title}
                        cover={book.cover}
                        description={book.description}
                    />
                ))}
            </section>
        </main>
    )
}
