import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Loading from 'components/misc/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminUsersTable from 'components/admin/users/AdminUsersTable'
import AdminUserEditModal from 'components/admin/users/AdminUserEditModal'

import { getUsers } from 'actions'
import UsersApi from 'services/users.service'

const mapStateToProp = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    getUsers,
}

function AdminUsers(props) {
    const { users } = props
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const usersApi = new UsersApi()
        const fetchedUsers = await usersApi.getUsers()
        props.getUsers(fetchedUsers.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />

    return (
        <main className='container'>
            <HeaderPage title='Administración de usuarios'>
                <AdminUserEditModal isNew />
            </HeaderPage>
            <AdminUsersTable users={users} />
        </main>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(AdminUsers)
