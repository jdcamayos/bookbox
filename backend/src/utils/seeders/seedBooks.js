// DEBUG=app:* node src/utils/seeders/seedBooks.js

const chalk = require('chalk')
const debug = require('debug')('app:scripts:movies')
const MongoLib = require('../../database/mongo')
const { bookMock } = require('../mocks/books')

async function seedBooks() {
    try {
        const mock = await bookMock()
        const mongoDB = new MongoLib()
        const promises = mock.map(async book => {
            await mongoDB.create('books', book)
        })
        await Promise.all(promises);
        debug(chalk.green(`${promises.length} books have been created succesfully`)); // prettier-ignore
        return process.exit(0)
    } catch (error) {
        debug(chalk.red(error))
        process.exit(1)
    }
}

seedBooks()
