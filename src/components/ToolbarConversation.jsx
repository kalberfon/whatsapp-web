import { AccountCircle, MoreVert, Search } from "@material-ui/icons";
import HeaderToolbar from "../styled-components/HeaderToolbar";
import BoxIcon from "../styled-components/BoxIcon";
import Toolbar from "../styled-components/Toolbar";

const ToolbarConversation = ({name, onClick}) => {
    return (
        <Toolbar onClick={onClick}>
            <BoxIcon>
            <AccountCircle style={{width: "50px"}}/>
            </BoxIcon>
            <HeaderToolbar>
                {name}
            </HeaderToolbar>
            <BoxIcon>
                <Search/>
            </BoxIcon>
            <BoxIcon>
                <MoreVert/>
            </BoxIcon>
        </Toolbar>
    );
}


export default ToolbarConversation;