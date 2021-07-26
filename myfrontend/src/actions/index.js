export const actions = {
    loginRequest: 'LOGIN_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    registerRequest: 'REGISTER_REQUEST',
    setFavorite: 'SET_FAVORITE',
    deleteFavorite: 'DELETE_FAVORITE',
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

export const setFavorite = payload => ({
    type: actions.setFavorite,
    payload,
})

export const deleteFavorite = payload => ({
    type: actions.deleteFavorite,
    payload,
})
