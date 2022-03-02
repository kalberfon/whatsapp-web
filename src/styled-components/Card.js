import styled from "styled-components";
import DefaultTheme from "../assets/themes/default";

const Card = styled.div`
    background-color: ${DefaultTheme.secondary};
    display: flex;
    padding: 10px 10px;
    header {
        position: relative;
        z-index: 1000;
        box-sizing: border-box;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        color: ${DefaultTheme.primary};
        font-size: 40px;
        .account {
            position: relative;
            display: block;
            width: 40px;
            height: 40px;
        }
        
    }
`

export default Card;