import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";
import Card from "./Card";


export default styled(Card)`
    span {
        align-items: center;
        max-width: 20px;
        cursor: pointer;
        padding: 0px 0 0 10px;
        color: ${DefaultTheme.accent};
        svg {
            width: 100%;
            height: 100%;
        }
    }
`