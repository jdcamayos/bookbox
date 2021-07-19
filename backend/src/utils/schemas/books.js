const joi = require('@hapi/joi')

const bookIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const bookTitleSchema = joi.string().max(100)
const bookAuthorSchema = joi.string().max(100)
const bookDescriptionSchema = joi.string().max(500)
const bookDateSchema = joi.number().max(2077)
const bookCoverSchema = joi.string().uri()
const bookTagsSchema = joi.array().items(joi.string().max(50))

const createBookSchema = {
    title: bookTitleSchema.required(),
    author: bookAuthorSchema.required(),
    description: bookDescriptionSchema.required(),
    date: bookDateSchema.required(),
    cover: bookCoverSchema.required(),
    tags: bookTagsSchema.required(),
}

const updateBookSchema = {
    title: bookTitleSchema,
    author: bookAuthorSchema,
    description: bookDescriptionSchema,
    date: bookDateSchema,
    cover: bookCoverSchema,
    tags: bookTagsSchema,
}

module.exports = {
    bookIdSchema,
    createBookSchema,
    updateBookSchema,
}
