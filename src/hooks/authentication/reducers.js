

const ACTION_TYPES = {
    SAVE_ME: "SAVE_ME",
    LOGOUT: "LOGOUT",
    LOGIN: "LOGIN"
}

const reducers = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SAVE_ME:
            return {
                ...state,
                user: action.data
            }
        case ACTION_TYPES.LOGIN: 
            return {
                ...state,
                user: action.data,
                logged: true
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                logged: false,
                user: null
            }
        default:
            return state
    }
}

export {
    reducers,
    ACTION_TYPES
}