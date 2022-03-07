import { AccountCircle } from "@material-ui/icons";
import styled from "styled-components";
import DefaultTheme from "../../assets/themes/default";
const Avatar = styled.div`
    border-radius: 50%;
    padding: 1px 5px;
`
const Title = styled.b``
const Subtitle = styled.small`

`
const Header = styled.header`
    border-top: 1px solid ${DefaultTheme.primary};
    width: 100%;
    padding: 10px 16px;
    display: grid;
`
const Item = styled(({avatar, name, subtitle, ...props}) => (
    <div {...props}>
        <Avatar>
            <AccountCircle style={{width: "100%", fontSize: "60px", color: DefaultTheme.primary}}/>
        </Avatar>
        <Header>
            <Title>{name}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Header>
    </div>
))`
    cursor: pointer;
    margin-top: 2px;
    display: flex;
`

export default Item;