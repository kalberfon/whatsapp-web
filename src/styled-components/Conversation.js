import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";
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
`
const InMessage = styled(Message)`
    background-color: white;
    align-items: flex-start;
`

const OutMessage = styled(Message)`
    align-items: flex-end;
    background-color: #d9fdd3;
`
const BoxConversation = styled(({children, messages, ...props}) => (
    <div {...props}>
        {messages
        .map(({direction, text}) => direction === 'in' ? 
        <BoxMessage style={{alignItems: 'flex-start'}}><InMessage>{text}</InMessage></BoxMessage> :
        <BoxMessage style={{alignItems: 'flex-end'}}><OutMessage>{text}</OutMessage></BoxMessage> )
        }</div>
) )`
background: ${DefaultTheme.chatBackground};
flex-grow: 1;
padding-top: 30px;
`

export default BoxConversation;