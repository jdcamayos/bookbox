import axios from 'axios'

const backURL = process.env.BACK_URL + '/api'

export default class UsersApi {
    constructor() {
        this.query = axios.create({
            baseURL: backURL + '/users',
        })
    }

    async getUsers() {
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

    async getUser({ userId }) {
        try {
            const { data, status } = await this.query({
                url: '/' + userId,
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

    async createUser({ user }) {
        try {
            const { data, status } = await this.query({
                url: '/',
                method: 'post',
                data: user,
            })
            if (status === 201) {
                console.log(data)
                return data.data
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data?.message)
            }
        }
    }

    async updateUser({ userId, user }) {
        try {
            const { data, status } = await this.query({
                url: '/' + userId,
                method: 'put',
                data: user,
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

    async deleteUser({ userId }) {
        try {
            const { data, status } = await this.query({
                url: '/' + userId,
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
