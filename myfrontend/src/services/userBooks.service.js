import axios from 'axios'
import { config } from 'config'

export default class UsersApi {
    constructor() {
        this.query = axios.create({
            baseURL: config.backUrl + '/api/user-books',
        })
        this.token = `Bearer ${window.localStorage.getItem('tokenSession')}`
    }

    async getUserBooks({ userId }) {
        try {
            const { data } = await this.query({
                url: '/',
                method: 'get',
                params: { userId },
                headers: {
                    Authorization: this.token,
                },
            })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
        }
    }

    async createUserBook({ userId, bookId }) {
        try {
            const { data } = await this.query({
                url: '/',
                method: 'post',
                data: {
                    userId,
                    bookId,
                },
                headers: {
                    Authorization: this.token,
                },
            })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
        }
    }

    async deleteUserBook({ userBookId }) {
        try {
            const { data } = await this.query({
                url: '/' + userBookId,
                method: 'delete',
                headers: {
                    Authorization: this.token,
                },
            })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
        }
    }
}
