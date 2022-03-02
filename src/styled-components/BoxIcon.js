import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";


export default styled.span`
    display: inline-flex;
    align-items: center;
    color: ${DefaultTheme.accent};
    padding-right: 10px;
    svg {
        height: 100%;
    }
`