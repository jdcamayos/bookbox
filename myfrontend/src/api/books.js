import axios from 'axios'

const backURL = process.env.BACK_URL + '/api'

export default class BooksApi {
    constructor() {
        this.query = axios.create({
            baseURL: backURL + '/books',
        })
    }

    async getBooks() {
        try {
            const { data, status } = await this.query({
                url: '/',
                method: 'get',
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }

    async getBook({ bookId }) {
        try {
            const { data, status } = await this.query({
                url: '/' + bookId,
                method: 'get',
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }

    async createBook({ book }) {
        try {
            const { data, status } = await this.query({
                url: '/',
                method: 'post',
                data: book,
            })
            if (status === 201) {
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }

    async updateBook({ bookId, book }) {
        try {
            const { data, status } = await this.query({
                url: '/' + bookId,
                method: 'put',
                data: book,
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }

    async deleteBook({ bookId }) {
        try {
            const { data, status } = await this.query({
                url: '/' + bookId,
                method: 'delete',
            })
            if (status === 200) {
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }
}
