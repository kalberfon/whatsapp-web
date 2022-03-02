import { createContext, useContext, useReducer } from "react"
import { reducers } from "./reducers"


const ListStateContext = createContext()
const ListDispatchContext = createContext()

const ListProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducers, {list: [], selectedItem: null})
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
export {
    ListProvider,
    useDispatch
}