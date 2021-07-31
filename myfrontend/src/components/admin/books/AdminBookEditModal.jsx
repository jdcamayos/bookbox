import { useState } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'

import BookForm from 'components/admin/books/BookForm'

import BooksApi from 'api/books'
import { setBook, updateBook } from 'actions'

const mapDispatchToProps = {
    setBook,
    updateBook,
}

function AdminBookEditModal(props) {
    const { book, isNew } = props
    const [show, setShow] = useState(false)
    const [form, setForm] = useState(
        isNew
            ? {
                  title: '',
                  author: '',
                  description: '',
                  date: 0,
                  cover: '',
                  tags: [],
              }
            : {
                  title: book.title,
                  author: book.author,
                  description: book.description,
                  date: book.date,
                  cover: book.cover,
                  tags: book.tags,
              }
    )

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = () => {
        const booksApi = new BooksApi()
        if (isNew) {
            createBook(booksApi)
        } else {
            updateBook(booksApi)
        }
        handleClose()
    }


    const createBook = async booksApi => {
        const createdBookId = await booksApi.createBook({ book: form })
        if (createdBookId) {
            props.setBook({ _id: createdBookId, ...form })
        }
    }

    const updateBook = async booksApi => {
        const updatedBookId = await booksApi.updateBook({
            bookId: book._id,
            book: form,
        })
        if (updatedBookId) {
            props.updateBook({ _id: updatedBookId, ...form })
        }
    }

    return (
        <>
            {isNew ? (
                <button className='btn btn-dark' onClick={handleShow}>
                    Crear Libro
                </button>
            ) : (
                <button className='btn btn-warning' onClick={handleShow}>
                    Editar Libro
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
                        {isNew ? 'Crear Libro' : 'Editar Libro'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookForm form={form} setForm={setForm} />
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

export default connect(null, mapDispatchToProps)(AdminBookEditModal)
