// import { useState } from 'react'
// import { Modal } from 'react-bootstrap'

// function BookModal() {
//     const { user, isNew } = props
//     const [show, setShow] = useState(false)
//     return (
//         <Modal
//             show={show}
//             onHide={handleClose}
//             backdrop='static'
//             keyboard={false}
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title>
//                     {isNew ? 'Crear usuario' : 'Editar usuario'}
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <UserForm form={form} setForm={setForm} />
//             </Modal.Body>
//             <Modal.Footer>
//                 <button
//                     className='btn btn-outline-danger'
//                     onClick={handleClose}
//                 >
//                     Cerrar
//                 </button>
//                 <button className='btn btn-warning' onClick={handleSubmit}>
//                     {isNew ? 'Crear' : 'Actualizar'}
//                 </button>
//             </Modal.Footer>
//         </Modal>
//     )
// }

// export default BookModal
