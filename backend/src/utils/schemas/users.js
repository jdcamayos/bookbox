const joi = require('@hapi/joi')

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const userFirstNameSchema = joi.string().max(100)
const userLastNameSchema = joi.string().max(100)
const userEmailSchema = joi.string().email()
const userPasswordSchema = joi.string()
const userIsAdminSchema = joi.boolean()

const createUserSchema = {
    firstName: userFirstNameSchema.required(),
    lastName: userLastNameSchema.required(),
    email: userEmailSchema.required(),
    password: userPasswordSchema.required(),
    isAdmin: userIsAdminSchema,
}

const updateUserSchema = {
    firstName: userFirstNameSchema,
    lastName: userLastNameSchema,
    email: userEmailSchema,
    password: userPasswordSchema,
    isAdmin: userIsAdminSchema,
}

module.exports = {
    userIdSchema,
    createUserSchema,
    updateUserSchema,
}
