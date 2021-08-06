import axios from 'axios'

// const backURL = process.env.BACK_URL + '/api'
const backURL = 'http://localhost:4000/api'
const apiKeyToken =
    'ad4ef064d233b0363fc01d859186cc586330f9c2c327b1589d84f631233d0c0e'

export default class AuthApi {
    constructor() {
        this.query = axios.create({
            baseURL: backURL + '/auth',
        })
    }

    async signIn(user) {
        try {
            const { data, status } = await this.query({
                url: '/sign-in',
                method: 'post',
                auth: {
                    username: user.email,
                    password: user.password,
                },
                data: { apiKeyToken },
            })
            // if (status === 205) {
            //     return { data: null, messages: 'Usuario no encontrado' }
            // }
            // if (status === 206) {
            //     return { data: null, messages: 'Contraseña incorrecta' }
            // }
            if (status === 200) {
                return { data: data, messages: null }
            }
            return {
                data: null,
                messages: 'Ops! Algo salio mal, Intenta de nuevo',
            }
        } catch (error) {
            console.log(error)
        }
    }

    async signUp(user) {
        try {
            const { data, status } = await this.query({
                url: '/sign-up',
                method: 'post',
                data: user,
            })
            if (status === 201) {
                return { data: data, messages: null }
            }
            return {
                data: data,
                messages: 'Ops! Algo salio mal, Intenta de nuevo',
            }
        } catch (error) {
            console.log(error)
        }
    }
}
