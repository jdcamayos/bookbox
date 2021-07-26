import axios from 'axios'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading'

function AdminUserDeleteModal(props) {
    const history = useHistory()
    const { _id, firstName, lastName, isAdmin } = props.user
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleDelete = async () => {
        setLoading(true)
        const { data, status } = await axios({
            url: `http://localhost:4000/api/users/${_id}`,
            method: 'delete',
        })
        console.log(data)
        setLoading(false)
        if (status === 200) {
            handleClose()
            history.replace('/admin/users')
        }
    }
    return (
        <>
            <button className='btn btn-danger' onClick={handleShow}>
                Borrar
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Borrar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <p>
                                <strong>Nombre: </strong>
                                {firstName}
                            </p>
                            <p>
                                <strong>Apellido: </strong>
                                {lastName}
                            </p>
                            <p>
                                <strong>Rol: </strong>
                                {isAdmin ? 'Administrador' : 'Usuario'}
                            </p>
                            <p>Confirma que desea borrar?</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-danger'
                                onClick={handleClose}
                            >
                                Cerrar
                            </button>
                            <button
                                className='btn btn-danger'
                                onClick={handleDelete}
                            >
                                Borrar
                            </button>
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminUserDeleteModal
