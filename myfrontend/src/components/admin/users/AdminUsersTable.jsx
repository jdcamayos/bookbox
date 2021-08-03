import { connect } from 'react-redux'
import AdminUserRow from './AdminUserRow'

const mapStateToProp = state => {
    return {
        users: state.users,
    }
}

function AdminUsersTable(props) {
    const { users } = props

    return (
        <section className='mx-2'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nombres</th>
                        <th scope='col'>Apellidos</th>
                        <th scope='col'>Rol</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length
                        ? users.map(user => (
                              <AdminUserRow key={user._id} user={user} />
                          ))
                        : null}
                </tbody>
            </table>
        </section>
    )
}

export default connect(mapStateToProp, null)(AdminUsersTable)