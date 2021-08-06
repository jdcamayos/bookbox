import axios from 'axios'
import { config } from 'config'

export default class UsersApi {
    constructor() {
        this.query = axios.create({
            baseURL: config.backUrl + '/api/users',
        })
        this.token = `Bearer ${window.localStorage.getItem('tokenSession')}`
    }

    async getUsers() {
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

    async getUser({ userId }) {
        try {
            const { data } = await this.query({
                url: '/' + userId,
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

    async createUser({ user }) {
        try {
            const { data } = await this.query({
                url: '/',
                method: 'post',
                data: user,
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

    async updateUser({ userId, user }) {
        try {
            const { data } = await this.query({
                url: '/' + userId,
                method: 'put',
                data: user,
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

    async deleteUser({ userId }) {
        try {
            const { data } = await this.query({
                url: '/' + userId,
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
