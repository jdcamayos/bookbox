import { actions } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload,
            }
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
            }
        case actions.registerRequest:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

export default reducer
