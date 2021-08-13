import { useState } from 'react'
import { Modal } from 'react-bootstrap'

import UserForm from 'components/admin/users/UserForm'

import UsersApi from 'services/users.service'
import { setUser, updateUser } from 'actions'
import { connect } from 'react-redux'

const mapDispatchToProps = {
    setUser,
    updateUser,
}



function AdminUserEditModal(props) {
    const emptyForm = {
        email: '',
        firstName: '',
        lastName: '',
        isAdmin: false,
        password: '',
        repeatPassword: '',
    }
    const { user, isNew } = props
    const [show, setShow] = useState(false)
    const [form, setForm] = useState(
        isNew
            ? emptyForm
            : {
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  isAdmin: user.isAdmin,
                  password: '',
                  repeatPassword: '',
              }
    )

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = () => {
        const usersApi = new UsersApi()

        if(!form.password){
            console.log('no envia contraseña')
            delete form.password
        }

        delete form.repeatPassword
        
        if (isNew) {
            createUser(usersApi)
        } else {
            updateUser(usersApi)
        }
        handleClose()
    }

    const createUser = async usersApi => {
        const createdUserId = await usersApi.createUser({ user: form })
        if (createdUserId.data) {
            delete form.password
            props.setUser({ _id: createdUserId.data, ...form })
            console.log(createdUserId.message, createdUserId.data)
            setForm(emptyForm)
        }
    }

    const updateUser = async usersApi => {
        const updatedUserId = await usersApi.updateUser({
            userId: user._id,
            user: form,
        })
        if (updatedUserId) {
            props.updateUser({ _id: updatedUserId.data, ...form })
            console.log(updatedUserId.message, updatedUserId.data)
        }
    }

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
                    <Modal.Title>
                        {isNew ? 'Crear usuario' : 'Editar usuario'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm form={form} setForm={setForm} />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-outline-danger'
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    <button className='btn btn-warning' onClick={handleSubmit}>
                        {isNew ? 'Crear' : 'Actualizar'}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect(null, mapDispatchToProps)(AdminUserEditModal)
