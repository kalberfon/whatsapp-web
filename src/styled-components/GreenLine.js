import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";


const GreenLine = styled.div`
    &:after {
        content: ' ';
        width: 100%;
        height: 150px;
        background-color: ${DefaultTheme.accent};
        position: fixed;
        z-index: -1;
    }
`


export default GreenLine;