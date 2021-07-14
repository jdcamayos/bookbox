const express = require('express')

function booksApi(app) {
    const router = express.Router()
    app.use('/api/books', router)

    router.get('/', async function (req, res, next) {
        res.status(200).json({
            data: [],
            message: 'books listed'
        })
    })
}

module.exports = booksApi