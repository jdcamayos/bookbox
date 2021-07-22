export const actions = {
    loginRequest: 'LOGIN_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    registerRequest: 'REGISTER_REQUEST',
}

export const loginRequest = payload => ({
    type: actions.loginRequest,
    payload,
})

export const logoutRequest = payload => ({
    type: actions.logoutRequest,
    payload,
})

export const registerRequest = payload => ({
    type: actions.registerRequest,
    payload,
})
