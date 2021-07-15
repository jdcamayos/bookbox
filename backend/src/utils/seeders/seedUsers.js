// DEBUG=app:* node src/utils/seeders/seedUsers.js

const bcrypt = require('bcrypt')
const chalk = require('chalk')
const debug = require('debug')('app:scripts:users')
const MongoLib = require('../../database/mongo')
const { config } = require('../../config/index')

const users = [
    {
        email: 'admin@bookbox.com',
        firstName: 'BookBox',
        lastName: 'admin',
        password: config.defaultAdminPassword,
        isAdmin: true,
    },
    {
        email: 'jose@bookbox.com',
        firstName: 'Jose',
        lastName: 'BookBox',
        password: config.defaultUserPassword,
    },
    {
        email: 'maria@bookbox.com',
        firstName: 'Maria',
        lastName: 'BookBox',
        password: config.defaultUserPassword,
    },
]

async function createUser(mongoDB, user) {
    const { firstName, lastName, email, password, isAdmin } = user
    const hashedPassword = await bcrypt.hash(password, 10)

    const userId = await mongoDB.create('users', {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isAdmin: Boolean(isAdmin),
    })

    return userId
}

async function seedUsers() {
    try {
        const mongoDB = new MongoLib()

        const promises = users.map(async user => {
            const userId = await createUser(mongoDB, user)
            debug(chalk.green('User created with id:', userId))
        })

        await Promise.all(promises)
        return process.exit(0)
    } catch (error) {
        debug(chalk.red(error))
        process.exit(1)
    }
}

seedUsers()
