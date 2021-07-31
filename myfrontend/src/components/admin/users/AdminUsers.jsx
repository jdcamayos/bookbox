import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Loading from 'components/Loading'
import HeaderPage from 'components/misc/HeaderPage'
import AdminUsersTable from 'components/admin/users/AdminUsersTable'
import AdminUserEditModal from 'components/admin/users/AdminUserEditModal'

import { getUsers } from 'actions'
import UsersApi from 'api/users'

const mapStateToProp = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    getUsers,
}

function AdminUsers(props) {
    // const { users } = props
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        // if (users?.length > 0) {
        //     return
        // }
        const usersApi = new UsersApi()
        const fetchedUsers = await usersApi.getUsers()
        props.getUsers(fetchedUsers)
        setLoading(false)
        // console.log(users)
    }

    useEffect(() => {
        setLoading(true)
        fetchUsers()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className='container'>
            <HeaderPage title='Administración de usuarios'>
                <AdminUserEditModal isNew />
            </HeaderPage>

            {loading ? <Loading /> : <AdminUsersTable />}
        </main>
    )
}

export default connect(mapStateToProp, mapDispatchToProps)(AdminUsers)
