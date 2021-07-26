import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../Loading'
import HeaderPage from '../misc/HeaderPage'
import AdminUserEditModal from './AdminUserEditModal'
import AdminUsersTable from './AdminUsersTable'

function AdminUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const { data } = await axios({
            url: 'http://localhost:4000/api/users/',
            method: 'get',
        })
        setUsers(data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <main className='container'>
            <HeaderPage title='Administración de usuarios' >
                <AdminUserEditModal isNew />
            </HeaderPage>

            {loading ? <Loading /> : <AdminUsersTable data={users} />}
        </main>
    )
}

export default AdminUsers
