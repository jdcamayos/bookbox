const express = require('express')
const bcrypt = require('bcrypt')

const UsersService = require('../services/users.service')
const validationHandler = require('../utils/middlewares/validationHandler')
const { createUserSchema } = require('../utils/schemas/users')

function authApi(app) {
    const router = express.Router()
    app.use('/api/auth', router)

    const usersService = new UsersService()

    router.post('/sign-in', async function (req, res, next) {
        const { email, password } = req.body
        try {
            const user = await usersService.getUser({ email })
            if (!user) {
                return res.status(205).json({
                    message: 'user not found',
                })
            }
            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(206).json({
                    message: 'user auth error',
                })
            }
            delete user.password
            res.status(200).json({
                auth: {
                    token: true,
                },
                user,
                message: 'user auth succesfully',
            })
        } catch (error) {
            next(error)
        }
    })

    router.post(
        '/sign-up',
        validationHandler(createUserSchema),
        async function (req, res, next) {
            const { body: user } = req
            const { email } = user
            try {
                const userEmail = await usersService.getUser({ email })
                if(userEmail) {
                    return res.status(205).json({
                        message: 'email is already exists'
                    })
                }
                const createdUserId = await usersService.createUser({ user })
                res.status(201).json({
                    auth: {
                        token: true,
                    },
                    user: { _id: createdUserId, ...user, isAdmin: false },
                    message: 'user created',
                })
            } catch (error) {
                next(error)
            }
        }
    )
}

module.exports = authApi
