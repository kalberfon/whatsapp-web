import Writer from "../components/Writer";
import BoxConversation from "../styled-components/Conversation";
import CardConversation from "../styled-components/CardConversation";
import ToolbarConversation from "../components/ToolbarConversation";

const Chat = ({ to, messages }) => {
    return (
        <CardConversation>
            <ToolbarConversation name={"Grupo Geral"}/>
            <BoxConversation messages={messages}/>
            <Writer/>
        </CardConversation>
    )
}


export default Chat;