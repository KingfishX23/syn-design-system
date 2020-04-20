const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null,
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
                isConfirmed: true,
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            return {
                ...state
            }
        case 'RESET_AUTHERROR':
            return {
                ...state,
                authError: null
            }
        case 'EXISTING_SIGNOUT':
            return {
                ...state,
                authError: action.payload
            }
        default:
            return state
    }
}

export default authReducer