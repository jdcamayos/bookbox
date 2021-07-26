import { useState } from 'react'
import { Modal } from 'react-bootstrap'

function AdminUserEditModal({ user, isNew }) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            {isNew ? (
                <button className='btn btn-dark' onClick={handleShow}>
                    Crear Usuario
                </button>
            ) : (
                <button className='btn btn-warning' onClick={handleShow}>
                    Editar
                </button>
            )}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cuerpo del modal</Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-outline-danger'
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    {isNew ? (
                        <button className='btn btn-warning'>Crear Usuario</button>
                    ) : (
                        <button className='btn btn-warning'>Actualizar</button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminUserEditModal
