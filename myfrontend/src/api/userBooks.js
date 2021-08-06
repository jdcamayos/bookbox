import axios from 'axios'

const backURL = process.env.BACK_URL + '/api'

export default class UserBooksApi {
    constructor() {
        this.query = axios.create({
            baseURL: backURL + '/user-books',
        })
    }

    async getUserBooks({ userId }) {
        try {
            const { data, status } = await this.query({
                url: '/',
                method: 'get',
                params: { userId },
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
        }
    }

    async createUserBook({ userId, bookId }) {
        try {
            const { data, status } = await this.query({
                url: '/',
                method: 'post',
                data: {
                    userId,
                    bookId,
                },
            })
            if (status === 201) {
                return data
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteUserBook({ userBookId }) {
        try {
            const { data, status } = await this.query({
                url: '/' + userBookId,
                method: 'delete',
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
        }
    }
}
