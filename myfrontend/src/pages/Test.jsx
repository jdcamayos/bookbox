// import { useState } from 'react'
// import BooksApi from 'api/books'
// // import FormBook from 'components/FormBook'

// function Test() {
//     // Get Books
//     const [books, setBooks] = useState([])
//     const handleGetBooks = async () => {
//         const booksApi = new BooksApi()
//         const fetchedBooks = await booksApi.getBooks()
//         setBooks(fetchedBooks)
//     }
//     // Get Book
//     const [formBook, setFormBook] = useState({
//         bookId: '',
//     })
//     const [book, setBook] = useState({})

//     const handleGetBook = async event => {
//         event.preventDefault()
//         const booksApi = new BooksApi()
//         const fetchedBook = await booksApi.getBook(formBook)
//         setBook(fetchedBook)
//     }
//     const handleFormBook = event => {
//         setFormBook({
//             ...formBook,
//             [event.target.name]: event.target.value,
//         })
//     }
//     // Create Book
//     const [formCreateBook, setFormCreateBook] = useState({
//         title: '',
//         author: '',
//         description: '',
//         date: 0,
//         cover: '',
//         tags: [],
//     })
//     const handleFormCreateBook = event => {
//         setFormCreateBook({
//             ...formCreateBook,
//             [event.target.name]: event.target.value,
//         })
//     }
//     const handleCreateBook = async event => {
//         event.preventDefault()
//         const booksApi = new BooksApi()
//         console.log(formCreateBook)
//         const fetchedIdCreateBook = await booksApi.createBook({
//             formCreateBook,
//         })
//         console.log(fetchedIdCreateBook)
//         // setBook(fetchedIdCreateBook)
//     }
//     // Update Book
//     const [formBookForUpdate, setFormBookForUpdate] = useState({
//         bookId: '',
//     })
//     const handleGetBookForUpdate = async event => {
//         event.preventDefault()
//         const booksApi = new BooksApi()
//         const fetchedBookForUpdate = await booksApi.getBook(formBookForUpdate)
//         console.log(fetchedBookForUpdate)
//         setFormUpdateBook({
//             ...formUpdateBook,
//             title: fetchedBookForUpdate.title,
//             author: fetchedBookForUpdate.author,
//             description: fetchedBookForUpdate.description,
//             date: fetchedBookForUpdate.date,
//             cover: fetchedBookForUpdate.cover,
//             tags: fetchedBookForUpdate.tags,
//         })
//     }
//     const handleFormBookForUpdate = event => {
//         setFormBookForUpdate({
//             ...formBookForUpdate,
//             [event.target.name]: event.target.value,
//         })
//     }
//     const [formUpdateBook, setFormUpdateBook] = useState({
//         title: '',
//         author: '',
//         description: '',
//         date: 0,
//         cover: '',
//         tags: [],
//     })
//     // const handleFormUpdateBook = event => {
//     //     setFormUpdateBook({
//     //         ...formUpdateBook,
//     //         [event.target.name]: event.target.value,
//     //     })
//     // }

//     return (
//         <main className='container'>
//             <h1>This is the test page</h1>
//             <section>
//                 <h2>Books API</h2>
//                 <article>
//                     <h3>Get Books</h3>
//                     <button onClick={handleGetBooks}>Obtener Libros</button>
//                     <button onClick={() => setBooks([])}>Limpiar libros</button>
//                     <div>
//                         {books.length ? (
//                             books.map(book => (
//                                 <p key={book._id}>{JSON.stringify(book)}</p>
//                             ))
//                         ) : (
//                             <p>No hay libros aun</p>
//                         )}
//                     </div>
//                 </article>
//                 <article>
//                     <h3>Get Book</h3>
//                     <form onSubmit={handleGetBook}>
//                         <input
//                             type='text'
//                             name='bookId'
//                             onChange={handleFormBook}
//                         />
//                         <button type='submit'>Obtener Libro</button>
//                     </form>
//                     <button onClick={() => setBook({})}>Limpiar libro</button>
//                     {book ? (
//                         <p>{JSON.stringify(book)}</p>
//                     ) : (
//                         <p>No hay libro aun</p>
//                     )}
//                 </article>
//                 <article>
//                     <h3>Create Book</h3>
//                     <form onSubmit={handleCreateBook}>
//                         <input
//                             type='text'
//                             name='title'
//                             placeholder='title'
//                             onChange={handleFormCreateBook}
//                         />
//                         <br />
//                         <input
//                             type='text'
//                             name='author'
//                             placeholder='author'
//                             onChange={handleFormCreateBook}
//                         />
//                         <br />
//                         <input
//                             type='text'
//                             name='description'
//                             placeholder='description'
//                             onChange={handleFormCreateBook}
//                         />
//                         <br />
//                         <input
//                             type='number'
//                             name='date'
//                             placeholder='date'
//                             onChange={handleFormCreateBook}
//                         />
//                         <br />
//                         <input
//                             type='url'
//                             name='cover'
//                             placeholder='cover'
//                             onChange={handleFormCreateBook}
//                         />
//                         <br />
//                         {/* <input
//                             type='text'
//                             name='tags'
//                             placeholder='tags'
//                             onChange={handleFormCreateBook}
//                         /> */}
//                         <button type='submit'>Crear Libro</button>
//                     </form>
//                 </article>
//                 <article>
//                     <h3>Update Book</h3>
//                     <form onSubmit={handleGetBookForUpdate}>
//                         <input
//                             type='text'
//                             name='bookId'
//                             onChange={handleFormBookForUpdate}
//                         />
//                         <button type='submit'>Obtener Libro</button>
//                     </form>
//                     {/* <FormBook _id='6101c9d762039629466cbf52'/> */}
//                     {/* <form onSubmit={handleGetBookForUpdate}>
//                         <input
//                             type='text'
//                             name='bookId'
//                             onChange={handleFormBookForUpdate}
//                         />
//                         <button type='submit'>Obtener Libro</button>
//                     </form>
//                     <form onSubmit={handleCreateBook}>
//                         <input
//                             type='text'
//                             name='title'
//                             placeholder='title'
//                             onChange={handleFormUpdateBook}
//                         />
//                         <br />
//                         <input
//                             type='text'
//                             name='author'
//                             placeholder='author'
//                             onChange={handleFormUpdateBook}
//                         />
//                         <br />
//                         <input
//                             type='text'
//                             name='description'
//                             placeholder='description'
//                             onChange={handleFormUpdateBook}
//                         />
//                         <br />
//                         <input
//                             type='number'
//                             name='date'
//                             placeholder='date'
//                             onChange={handleFormUpdateBook}
//                         />
//                         <br />
//                         <input
//                             type='url'
//                             name='cover'
//                             placeholder='cover'
//                             onChange={handleFormUpdateBook}
//                         />
//                         <br />
//                          <input
//                             type='text'
//                             name='tags'
//                             placeholder='tags'
//                             onChange={handleFormCreateBook}
//                         />
//                         <button type='submit'>Crear Libro</button>
//                     </form> */}
//                 </article>
//             </section>
//         </main>
//     )
// }

// export default Test
