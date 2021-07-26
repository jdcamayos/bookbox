import { actions } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload.user,
                auth: action.payload.auth,
            }
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
                auth: action.payload,
            }
        case actions.registerRequest:
            return {
                ...state,
                user: action.payload.user,
                auth: action.payload.auth,
            }
        case actions.setFavorite:
            return {
                ...state,
                myBooks: [
                    ...state.myBooks.filter(
                        item => item._id !== action.payload._id
                    ),
                    action.payload,
                ],
            }
        case actions.deleteFavorite:
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
