import axios from 'axios'
import { config } from 'config'

export default class UsersApi {
    constructor() {
        this.query = axios.create({
            baseURL: config.backUrl + '/api/books',
        })
        this.token = `Bearer ${window.localStorage.getItem('tokenSession')}`
    }

    async getBooks() {
        try {
            const { data } = await this.query({
                url: '/',
                method: 'get',
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

    async getBook({ bookId }) {
        try {
            const { data } = await this.query({
                url: '/' + bookId,
                method: 'get',
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

    async createBook({ book }) {
        try {
            const { data } = await this.query({
                url: '/',
                method: 'post',
                data: book,
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

    async updateBook({ bookId, book }) {
        try {
            const { data } = await this.query({
                url: '/' + bookId,
                method: 'put',
                data: book,
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

    async deleteBook({ bookId }) {
        try {
            const { data } = await this.query({
                url: '/' + bookId,
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
