import { useState } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

import BooksApi from 'services/books.service'
import { deleteBook } from 'actions'

const mapDispatchToProps = {
    deleteBook,
}

function AdminBookDeleteModal(props) {
    const { _id, title, author, description, cover } = props.book
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleDelete = async () => {
        const booksApi = new BooksApi()
        const deletedBookId = await booksApi.deleteBook({ bookId: _id })
        if (deletedBookId) {
            props.deleteBook({ _id: deletedBookId })
        }
        handleClose()
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
                    <Modal.Title>Borrar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cover ? (
                        <img
                            className='card m-1'
                            src={cover}
                            alt='book cover'
                            width='100px'
                            height='100px'
                        />
                    ) : null}
                    <p>
                        <strong>Titulo: </strong>
                        {title}
                    </p>
                    <p>
                        <strong>Autor: </strong>
                        {author}
                    </p>
                    <p>
                        <strong>Descripción: </strong>
                        {description}
                    </p>
                    <p>Confirma que desea borrar?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-outline-danger'
                        onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    <button className='btn btn-danger' onClick={handleDelete}>
                        Borrar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default connect(null, mapDispatchToProps)(AdminBookDeleteModal)
