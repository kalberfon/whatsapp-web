import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";

const Name = styled.b`

`
const BoxMessage = styled.div`
    padding-right: 9%;
    padding-left: 9%;
    margin-bottom: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
`

const Message = styled.div`
    padding: 5px 50px 5px 10px;
    border-radius: 5px;
    border: 1px solid #00000012;
    display: flex;
    flex-direction: column;
`
const InMessage = styled(Message)`
    background-color: white;
    align-items: flex-start;
`

const OutMessage = styled(Message)`
    align-items: flex-end;
    background-color: #d9fdd3;
`
const BoxConversation = styled(({children, messages, me, ...props}) => (
    <div {...props}>
        {messages
        .map(({from, message}, index) => from !== me ? 
        <BoxMessage style={{alignItems: 'flex-start'}} key={index}><InMessage><Name>{from}</Name><span>{message}</span></InMessage></BoxMessage> :
        <BoxMessage style={{alignItems: 'flex-end'}} key={index}><OutMessage><span>{message}</span></OutMessage></BoxMessage> )
        }</div>
) )`
background: ${DefaultTheme.chatBackground};
flex-grow: 1;
padding-top: 30px;
overflow-y: scroll;
`

export default BoxConversation;