import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";

const BoxRigth = styled(({children, ...props}) => <div {...props}>{children}</div>)`
    width:  70%;
    border-left: 1px solid  ${DefaultTheme.primary};
    display: flex;
    flex-direction: column;
`

const BoxLeft = styled(({children, ...props}) => <div {...props}>{children}</div>)`
    width: 30%;
    overflow: hidden;
    display:flex;
    flex-direction: column;
`

const BoxRoot = styled(({children, ...props}) => (<div {...props}>{children}</div>) )`
    width: auto;
    margin: 23px 270px;
    display: flex;
    height: calc(100vh - 52px);
    background-color: ${DefaultTheme.secondary};
    box-shadow: 0 6px 18px rgb(11 20 26 / 5%);
`

export {
    BoxRoot, 
    BoxLeft,
    BoxRigth,
};