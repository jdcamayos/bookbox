const MongoLib = require('../database/mongo')
const bcrypt = require('bcrypt')

class UsersService {
    constructor() {
        this.collection = 'users'
        this.mongoDB = new MongoLib()
    }

    async getUser({ email }) {
        const [user] = await this.mongoDB.getAll(this.collection, { email })
        return user
    }

    async createUser({ user }) {
        const { firstName, lastName, email, password } = user
        const isAdmin = user.isAdmin ? user.isAdmin : false
        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUserId = await this.mongoDB.create(this.collection, {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            isAdmin,
        })
        return createdUserId
    }

    async updateUser({ userId, user }) {
        const updatedUserId = await this.mongoDB.update(
            this.collection,
            userId,
            user
        )
        return updatedUserId
    }

    async deleteUser({ userId }) {
        const deletedUserId = await this.mongoDB.delete(this.collection, userId)
        return deletedUserId
    }
}

module.exports = UsersService
