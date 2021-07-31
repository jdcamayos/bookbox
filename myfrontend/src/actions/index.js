export const actions = {
    // auth
    loginRequest: 'LOGIN_REQUEST',
    logoutRequest: 'LOGOUT_REQUEST',
    registerRequest: 'REGISTER_REQUEST',
    // books
    getBooks: 'GET_BOOKS',
    setBook: 'SET_BOOK',
    updateBook: 'UPDATE_BOOK',
    deleteBook: 'DELETE_BOOK',
    // users
    getUsers: 'GET_USERS',
    setUser: 'SET_USER',
    updateUser: 'UPDATE_USER',
    deleteUser: 'DELETE_USER',
    // userBooks
    getUserBooks: 'GET_USERBOOKS',
    setUserBook: 'SET_USERBOOK',
    deleteUserBook: 'DELETE_FAVORITE',
}

// auth

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

// books

export const getBooks = payload => ({
    type: actions.getBooks,
    payload,
})

export const setBook = payload => ({
    type: actions.setBook,
    payload,
})

export const updateBook = payload => ({
    type: actions.updateBook,
    payload,
})

export const deleteBook = payload => ({
    type: actions.deleteBook,
    payload,
})

// users

export const getUsers = payload => ({
    type: actions.getUsers,
    payload,
})

export const setUser = payload => ({
    type: actions.setUser,
    payload,
})

export const updateUser = payload => ({
    type: actions.updateUser,
    payload,
})

export const deleteUser = payload => ({
    type: actions.deleteUser,
    payload,
})

// userBooks

export const getUserBooks = payload => ({
    type: actions.getUserBooks,
    payload,
})

export const setUserBook = payload => ({
    type: actions.setUserBook,
    payload,
})

export const deleteUserBook = payload => ({
    type: actions.deleteUserBook,
    payload,
})
