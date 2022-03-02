import styled from "styled-components";
import Card from "./Card";

const Toolbar = styled(({children, ...props}) => <Card {...props}>{children}</Card>)`
    height: 40px;
`

export default Toolbar;