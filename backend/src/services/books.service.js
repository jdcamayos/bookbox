const MongoLib = require('../database/mongo')

class BooksService {
    constructor() {
        this.collection = 'books'
        this.mongoDB = new MongoLib()
    }

    async getBooks({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const books = await this.mongoDB.getAll(this.collection, query)
        return books || []
    }

    async getBook({ bookId }) {
        const book = await this.mongoDB.get(this.collection, bookId)
        return book || {}
    }

    async createBook({ book }) {
        const createdBookId = await this.mongoDB.create(this.collection, book)
        return createdBookId
    }

    async updateBook({ bookId, book }) {
        const updatedBookId = await this.mongoDB.update(
            this.collection,
            bookId,
            book
        )
        return updatedBookId
    }
    async deleteBook({ bookId }) {
        const deletedBookId = await this.mongoDB.delete(this.collection, bookId)
        return deletedBookId
    }
}

module.exports = BooksService
