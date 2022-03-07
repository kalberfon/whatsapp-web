import { createContext, useContext, useReducer } from "react"
import { ACTION_TYPES, reducers } from "./reducers"


const ListStateContext = createContext()
const ListDispatchContext = createContext()

const ListProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducers, {list: [
        {
            name: "Grupo Geral",
            subtitle: "",
            channelId: "general-group"
        },
        {
            name: "Grupo RH",
            subtitle: "",
            channelId: "rh-group"
        },
    ], selectedItem: null})
    console.log('ListProvider')
    return (
        <ListStateContext.Provider value={ state }>
            <ListDispatchContext.Provider value={dispatch}>
                {children}
            </ListDispatchContext.Provider>
        </ListStateContext.Provider>
    )
}

const useDispatch = () => {
    const dispatch = useContext(ListDispatchContext)
    if (!dispatch) {
        throw new Error("necessario o provider de Lista")
    }
    return dispatch
}
const useList = () => {
    const context = useContext(ListStateContext)
    if (!context) {
        throw new Error("necessario o provider de Lista")
    }
    return context
}
const useItemSelected = () => {
    const dispatch = useDispatch();

    return {
        onSelected: (selectedItem) => dispatch({type: ACTION_TYPES.SELECTED_ITEM, data: selectedItem})
    }
}
export {
    ListProvider,
    useDispatch,
    useList,
    useItemSelected
}