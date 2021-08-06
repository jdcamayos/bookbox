import AdminBookDeleteModal from 'components/admin/books/AdminBookDeleteModal'
import AdminBookEditModal from 'components/admin/books/AdminBookEditModal'

function AdminBookRow(props) {
    const { book } = props
    const { title, author, date } = book
    return (
        <tr>
            <th scope='row'></th>
            <td style={{ maxWidth: '150px'}}>{title}</td>
            <td style={{ maxWidth: '150px'}}>{author}</td>
            <td>{date}</td>
            <td className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <AdminBookEditModal book={book} />
                <AdminBookDeleteModal book={book} />
            </td>
        </tr>
    )
}

export default AdminBookRow
