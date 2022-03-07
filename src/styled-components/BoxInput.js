import styled from "styled-components";

const BoxText = styled.div`
    display:flex;
    flex-direction: column;
    padding-right: 10px;
    label {
        font-size: 12px;
        padding: 16px 12px 7px 14px;
    }
`

export default styled( ({ children, label, ...props}) =>
    <BoxText>
        <label>{label}</label> 
        {children}
    </BoxText> )`

`