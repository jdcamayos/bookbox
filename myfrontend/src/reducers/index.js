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
        default:
            return state
    }
}

export default reducer
