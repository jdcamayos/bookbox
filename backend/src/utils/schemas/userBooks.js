const joi = require('@hapi/joi')

const { bookIdSchema } = require('./books')
const { userIdSchema } = require('./users')

const userBookIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)

const createUserBookSchema = {
    userId: userIdSchema,
    bookId: bookIdSchema,
}

module.exports = {
    userBookIdSchema,
    createUserBookSchema,
}
