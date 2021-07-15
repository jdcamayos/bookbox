const express = require('express')
const BooksService = require('../services/books.service')
const validationHandler = require('../utils/middlewares/validationHandler')

// Schemas
const {
    bookIdSchema,
    createBookSchema,
    updateBookSchema,
} = require('../utils/schemas/books')

function booksApi(app) {
    const router = express.Router()
    app.use('/api/books', router)

    const booksService = new BooksService()

    router.get('/', async function (req, res, next) {
        const { tags } = req.query
        try {
            const books = await booksService.getBooks({ tags })
            res.status(200).json({
                data: books,
                message: 'books listed',
            })
        } catch (error) {
            next(error)
        }
    })

    router.get(
        '/:bookId',
        validationHandler({ bookId: bookIdSchema }),
        async function (req, res, next) {
            const { bookId } = req.params
            try {
                const book = await booksService.getBook({ bookId })
                res.status(200).json({
                    data: book,
                    message: 'book retrieved',
                })
            } catch (error) {
                next(error)
            }
        }
    )

    router.post(
        '/',
        validationHandler(createBookSchema),
        async function (req, res, next) {
            const { body: book } = req
            try {
                const createdBookId = await booksService.createBook({ book })
                res.status(201).json({
                    data: createdBookId,
                    message: 'book created',
                })
            } catch (error) {
                next(error)
            }
        }
    )

    router.put(
        '/:bookId',
        // validationHandler({ bookId: bookIdSchema }),
        validationHandler(updateBookSchema),
        async function (req, res, next) {
            const { bookId } = req.params
            const { body: book } = req
            try {
                const updatedBookId = await booksService.updateBook({
                    bookId,
                    book,
                })
                res.status(200).json({
                    data: updatedBookId,
                    message: 'book updated',
                })
            } catch (error) {
                next(error)
            }
        }
    )

    router.delete(
        '/:bookId',
        validationHandler({ bookId: bookIdSchema }),
        async function (req, res, next) {
            const { bookId } = req.params
            try {
                const deletedBookId = await booksService.deleteBook({
                    bookId,
                })
                res.status(200).json({
                    data: deletedBookId,
                    message: 'books listed',
                })
            } catch (error) {
                next(error)
            }
        }
    )
}

module.exports = booksApi
