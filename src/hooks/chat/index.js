import { createContext } from "react";



const ChatStateContext = createContext()
const ChatDispatchContext = createContext()

const ChatProvider = ({ children }) => {
    return (
        <ChatStateContext.Provider>
            <ChatDispatchContext.Provider>
                {children}
            </ChatDispatchContext.Provider>
        </ChatStateContext.Provider>
    )
}



export {
    ChatProvider
}