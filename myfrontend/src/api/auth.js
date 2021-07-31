import axios from 'axios'

const backURL = 'https://bookboxbackend.herokuapp.com/api'

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
                data: user,
            })
            if (status === 205) {
                return { data: null, messages: 'Usuario no encontrado' }
            }
            if (status === 206) {
                return { data: null, messages: 'Contraseña incorrecta' }
            }
            if (status === 200) {
                return { data: data, messages: null }
            }
            return { data: null, messages: 'Ops! Algo salio mal, Intenta de nuevo' }
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
                return {data: data, messages: null}
            }
            return {data: data, messages: 'Ops! Algo salio mal, Intenta de nuevo'}
        } catch (error) {
            console.log(error)
        }
    }
}
