
const ACTION_TYPES = {
    CHANGE_CHANNEL: "CHANGE_CHANNEL",
    MESSAGE_RECEIVED: "MESSAGE_RECEIVED",
    LOAD_ALL_MESSAGES: "LOAD_ALL_MESSAGES",
    SEND_MESSAGE: "SEND_MESSAGE"
}
const reducers = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.MESSAGE_RECEIVED: 
        return {
            ...state,
            messages: [ ...state.messages ,...[action.data] ]
        }
        case ACTION_TYPES.LOAD_ALL_MESSAGES: 
        return {
            ...state,
            messages: action.data
        }
        case ACTION_TYPES.CHANGE_CHANNEL:
            return {
                channelId: action.data.channelId,
                ...state
            }
        default: 
        return {
            ...state
        }
    }
}


export {
    reducers,
    ACTION_TYPES
};