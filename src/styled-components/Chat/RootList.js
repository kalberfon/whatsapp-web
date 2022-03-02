import styled from "styled-components";

const RootList = styled(({children, ...props}) => <div {...props}>
    <div style={{position: "absolute", width: "100%"}}>{children}</div>
</div>)`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
    background: white;

`

export default RootList;