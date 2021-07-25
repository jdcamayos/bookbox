const express = require('express')

const UserBooksService = require('../services/userBook.service')
const validationHandler = require('../utils/middlewares/validationHandler')

const { bookIdSchema } = require('../utils/schemas/books')
const { userIdSchema } = require('../utils/schemas/users')
const { createUserBookSchema } = require('../utils/schemas/userBooks')

function userBooksApi(app) {
    const router = express.Router()
    app.use('/api/user-books', router)

    const userBooksService = UserBooksService()

    router.get(
        '/',
        validationHandler({ userId: userIdSchema }, 'query'),
        async function (req, res, next) {
            const { userId } = req.query

            try {
                const userBooks = await userBooksService.getUserBooks({
                    userId,
                })
                res.status(200).json({
                    data: userBooks,
                    message: 'user movies listed',
                })
            } catch (error) {
                next(error)
            }
        }
    )

    router.post(
        '/',
        validationHandler(createUserBookSchema),
        async function (req, res, next) {
            const { body: userBook } = req
            try {
                const createdUserBookId = await userBooksService.createUserBook(
                    { userBook }
                )
                res.status(201).json({
                    data: createdUserBookId,
                    message: 'user book created',
                })
            } catch (error) {
                next(error)
            }
        }
    )

    router.delete(
        '/:userBookId',
        validationHandler(
            { userBookId: bookIdSchema },
            'params',
            async function (req, res, body) {
                const { userBookId } = req.params
                try {
                    const deletedUserBookId =
                        await userBooksService.deleteUserBook({
                            userBookId,
                        })
                    res.status(200).json({
                        data: deletedUserBookId,
                        message: 'user book deleted',
                    })
                } catch {
                    next(error)
                }
            }
        )
    )
}

module.exports = userBooksApi