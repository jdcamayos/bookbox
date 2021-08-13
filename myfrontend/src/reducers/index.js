import { actions } from 'actions'

const reducer = (state, action) => {
    switch (action.type) {
        // auth
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload.user,
                auth: { token: action.payload.token },
            }
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
                auth: action.payload,
                users: action.payload,
                books: action.payload,
                myBooks: action.payload,
            }
        case actions.registerRequest:
            return {
                ...state,
                user: action.payload.user,
                auth: { token: action.payload.token },
            }
        // books
        case actions.getBooks:
            return {
                ...state,
                books: action.payload,
            }
        case actions.setBook:
            return {
                ...state,
                books: [...state.books, action.payload],
            }
        case actions.updateBook:
            return {
                ...state,
                books: [
                    ...state.books.filter(
                        item => item._id !== action.payload._id
                    ),
                    action.payload,
                ],
            }
        case actions.deleteBook:
            return {
                ...state,
                books: [
                    ...state.books.filter(
                        item => item._id !== action.payload
                    ),
                ],
            }
        // users
        case actions.getUsers:
            return {
                ...state,
                users: action.payload,
            }
        case actions.setUser:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case actions.updateUser:
            return {
                ...state,
                users: [
                    ...state.users.filter(
                        item => item._id !== action.payload._id
                    ),
                    action.payload,
                ],
            }
        case actions.deleteUser:
            return {
                ...state,
                users: [
                    ...state.users.filter(
                        item => item._id !== action.payload
                    ),
                ],
            }
        // userBooks
        case actions.getUserBooks:
            return {
                ...state,
                myBooks: action.payload,
            }
        case actions.setUserBook:
            return {
                ...state,
                myBooks: [
                    ...state.myBooks.filter(
                        item => item._id !== action.payload._id
                    ),
                    action.payload,
                ],
            }
        case actions.deleteUserBook:
            return {
                ...state,
                myBooks: state.myBooks.filter(
                    items => items._id !== action.payload
                ),
            }
        default:
            return state
    }
}

export default reducer
