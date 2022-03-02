import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";
const BackDrop = styled.div`
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: fixed;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    z-index: -1;
`

export default styled( ({children, ...props}) => <div><BackDrop>
<div {...props}>{children}</div>
</BackDrop></div>)`
    width: 1000px;
    height: 500px;
    background: ${DefaultTheme.secondary};
    border-radius: 5px;
    border: 1px solid black;
`