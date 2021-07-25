const MongoLib = require('../database/mongo')

class UserBooksService {
    constructor() {
        this.collection = 'user-books'
        this.mongoDB = new MongoLib()
    }

    async getUserBooks({ userId }) {
        const query = userId && { userId }
        const userBooks = await this.mongoDB.getAll(this.collection, query)
        return userBooks || []
    }

    async createUserBook({ userBook }) {
        const createdUserBookId = await this.mongoDB.create(this.collection, userBook)
        return createdUserBookId
    }

    async deleteUserBoo({ userBookId }) {
        const deletedUserBookId = await this.mongoDB.delete(this.collection, userBookId)
        return deletedUserBookId
    }
}

module.exports = UserBooksService