const fs = require('fs')

async function bookMock() {
    const books = await fs.promises.readFile(__dirname + '/bookMock.json')
    console.log(JSON.parse(books).length, 'books readed in mock')
    return JSON.parse(books)
}

module.exports = { bookMock }