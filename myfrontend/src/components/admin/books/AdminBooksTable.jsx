import AdminBookRow from 'components/admin/books/AdminBookRow'

function AdminBooksTable(props) {
    const { books } = props
    return (
        <section className='mx-2'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Titulo</th>
                        <th scope='col'>Autor</th>
                        <th scope='col'>Fecha</th>
                        {/* <th scope='col'>Tags</th> */}
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {books.length &&
                        books.map(book => (
                            <AdminBookRow key={book._id} book={book} />
                        ))}
                </tbody>
            </table>
        </section>
    )
}

export default AdminBooksTable
