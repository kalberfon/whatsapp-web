import Writer from "../components/Writer";
import BoxConversation from "../styled-components/Conversation";
import CardConversation from "../styled-components/CardConversation";
import ToolbarConversation from "../components/ToolbarConversation";
import { useChat, useMessageReceived, useSendMessage } from "../hooks/chat";
import { useEffect } from "react";
import { useList } from "../hooks/list";

const Chat = ({username, chatName}) => {
    const { messages } = useChat();
    const  { selectedItem } = useList();
    const onBindChannel = useMessageReceived()
    const { mutate } = useSendMessage()
    useEffect( () => {
        onBindChannel(selectedItem?.channelId)
    }, [selectedItem, onBindChannel]);
    return selectedItem?.channelId ? (
        <CardConversation >
            <ToolbarConversation name={selectedItem.name}/>
            <BoxConversation messages={messages} me={username.name}/>
            <Writer sendMessage={({ message }) => {mutate({message, channel: selectedItem.channelId, from: username.name}); return true; }}/>
        </CardConversation>
    ) : 
    <>Selecione uma conversa</>
}


export default Chat;