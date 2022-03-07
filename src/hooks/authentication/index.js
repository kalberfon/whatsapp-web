import { createContext, useContext, useReducer } from "react"
import { ACTION_TYPES, reducers } from "./reducers";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const AuthenticationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, {user: null, logged: false});
    const { logged } = state

    return (
        <AuthStateContext.Provider value={{logged, ...state}}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}
const useDispatch = () => {
    const dispatch = useContext(AuthDispatchContext)

    if (!dispatch) {
        throw new Error("useAuth must be used withing authenticationProvider")
    }
    return dispatch;
}
const useAuth = () => {
    const context = useContext(AuthStateContext)

    if (!context) {
        throw new Error("useAuth must be used withing authenticationProvider")
    }
    return context;
}
const useLogin = () => {
    const dispatch = useDispatch()

    return {
        onLogin: ({email, name}) => dispatch({type: ACTION_TYPES.LOGIN, data: {email: email, name: name}})   
    }   
}
export {
    AuthenticationProvider,
    useAuth,
    useLogin
}