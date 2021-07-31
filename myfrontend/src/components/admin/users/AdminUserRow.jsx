import AdminUserDeleteModal from './AdminUserDeleteModal'
import AdminUserEditModal from './AdminUserEditModal'

function AdminUserRow(props) {
    const { user } = props
    const { firstName, lastName, isAdmin } = user
    return (
        <tr>
            <th scope='row'></th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{isAdmin ? 'Administrador' : 'Usuario'}</td>
            <td className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <AdminUserEditModal user={user} />
                <AdminUserDeleteModal user={user} />
            </td>
        </tr>
    )
}

export default AdminUserRow
