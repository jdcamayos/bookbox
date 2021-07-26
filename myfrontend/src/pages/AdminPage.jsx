import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import HeaderPage from '../components/misc/HeaderPage'

function AdminPage() {
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
            <HeaderPage title='Administración' />
            <section>
                <h3>Usuarios</h3>
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
                        {loading ? (
                            <tr>
                                <th>Cargando...</th>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th scope='row'>{index}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                                    <td className='d-grid gap-2 d-md-flex justify-content-md-start'>
                                        <button
                                            className='btn btn-warning me-md-2'
                                            type='button'
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className='btn btn-danger'
                                            type='button'
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default connect(null, null)(AdminPage)
