// DEBUG=app:* node src/utils/seeders/seedApiKeys.js

const chalk = require('chalk')
const crypto = require('crypto')
const debug = require('debug')('app:scripts:api-keys')
const MongoLib = require('../../database/mongo')

const adminScopes = [
    'signin:auth',
    'signup:auth',
    'read:books',
    'create:books',
    'update:books',
    'delete:books',
    'read:user-books',
    'create:user-books',
    'delete:user-books',
]

const publicScopes = [
    'signin:auth',
    'signup:auth',
    'read:books',
    'read:user-books',
    'create:user-books',
    'delete:user-books',
]

const apiKeys = [
    {
        token: generateRandomToken(),
        scopes: adminScopes,
    },
    {
        token: generateRandomToken(),
        scopes: publicScopes,
    },
]

function generateRandomToken() {
    const buffer = crypto.randomBytes(32)
    return buffer.toString('hex')
}

async function seedApiKeys() {
    try {
        const mongoDB = new MongoLib()

        const promises = apiKeys.map(async apiKey => {
            await mongoDB.create('api-keys', apiKey)
        })

        await Promise.all(promises)
        debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
        return process.exit(0)
    } catch (error) {
        debug(chalk.red(error))
        process.exit(1)
    }
}

seedApiKeys()
