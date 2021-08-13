import { Link } from 'react-router-dom'

import Loading from 'components/misc/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminUsersTable from 'components/admin/users/AdminUsersTable'
import AdminUserEditModal from 'components/admin/users/AdminUserEditModal'

import useUsers from 'hooks/useUsers'

function AdminUsers() {
    const { users, loading } = useUsers()

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title='Administración de usuarios'>
                <Link to='/admin' className='btn btn-outline-dark mx-3'>
                    Atras
                </Link>
                <AdminUserEditModal isNew />
            </HeaderPage>
            <AdminUsersTable users={users} />
        </main>
    )
}

export default AdminUsers
