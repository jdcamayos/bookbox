import axios from 'axios'
import { config } from 'config'

export default class AuthApi {
    constructor() {
        this.query = axios.create({
            baseURL: config.backUrl + '/api/auth',
        })
        this.token = `Bearer ${window.localStorage.getItem('tokenSession')}`
    }

    async signIn(user) {
        try {
            const { data } = await this.query({
                url: '/sign-in/',
                method: 'post',
                auth: {
                    username: user.email,
                    password: user.password,
                },
                data: { apiKeyToken: config.apiKeyToken },
            })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
        }
    }

    async signUp(user) {
        try {
            const { data } = await this.query({
                url: '/sign-up',
                method: 'post',
                data: {
                    ...user,
                    apiKeyToken: config.apiKeyToken,
                },
            })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data) return error.response.data
        }
    }

    async verifyToken() {
        try {
            const { data } = await this.query({
                url: '/verify-token',
                method: 'post',
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
