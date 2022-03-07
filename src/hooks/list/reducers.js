const ACTION_TYPES = {
    SELECTED_ITEM:  "SELECTED_ITEM"
}


const reducers = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECTED_ITEM:
            return {
                ...state,
                selectedItem: state.list.filter((item) => item.channelId === action.data.channelId)[0] || null
            }
        default:
            return{
                ...state
            }
    }
}

export {
    reducers,
    ACTION_TYPES
}