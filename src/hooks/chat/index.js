import { createContext, useContext, useMemo, useReducer } from "react";
import { reducers, ACTION_TYPES } from "./reducers";
import Pusher from "pusher-js";
import { useMutation, useQuery } from "react-query";
import { createMessage, fetchMessages } from "../../api/message";


const ChatStateContext = createContext()
const ChatDispatchContext = createContext()

const ChatProvider = ({ channelId, children }) => {
    
    const [state, dispatch ] = useReducer(reducers, {channelId: channelId, messages: []})
    const { isLoading } = useQuery(["messages", channelId], () => fetchMessages(channelId), {
        onSuccess: (data) => dispatch({ type: ACTION_TYPES.LOAD_ALL_MESSAGES, ...data })
    })
    return (
        <ChatStateContext.Provider value={ {isLoading, ...state} }>
            <ChatDispatchContext.Provider value={ dispatch }>
                {children}
            </ChatDispatchContext.Provider>
        </ChatStateContext.Provider>
    )
}

const useDispatch = () => {
    const dispatch = useContext(ChatDispatchContext)
    if (!dispatch) {
        throw new Error("necessario o provider de Chat")
    }
    return dispatch
}
const useChat = () => {
    const context = useContext(ChatStateContext)
    if (!context) {
        throw new Error("Necessario o chat provider")
    }
    return context;
}
const useSendMessage = () => {
    const dispatch = useDispatch()
    return useMutation(({message, channel, from}) => createMessage(message, channel, from), {
        onSuccess: (data) => dispatch({ type: ACTION_TYPES.SEND_MESSAGE,  data: data})
    })
}
const useMessageReceived = () => {
    const dispatch = useDispatch()
    return useMemo(() => (channelId) => {
        if (channelId) {
        const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {cluster: process.env.REACT_APP_PUSHER_CLUSTER});
        if (window.channel) {
            window.channel.unsubscribe();
            window.channel = null;
        }
        window.lastMessageId = null;
        window.channel = pusher.subscribe(channelId).bind('message', (data) => dispatch({type: ACTION_TYPES.MESSAGE_RECEIVED, data: data}));
    }
    }, [dispatch]);
}
export {
    ChatProvider,
    useChat,
    useMessageReceived,
    useSendMessage
}