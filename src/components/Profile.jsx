import { AccountCircle, DataUsage, Message, MoreVert } from "@material-ui/icons";
import Toolbar from "../styled-components/Toolbar";
import BoxIcon from "../styled-components/BoxIcon";
const Profile = () => {
    return (
        <Toolbar>
            <header>
                <BoxIcon style={{flexGrow: '1' }}>
                    <AccountCircle className="account" />
                </BoxIcon>
                <BoxIcon>
                    <DataUsage/>
                </BoxIcon>
                <BoxIcon>
                    <Message/>
                </BoxIcon>
                <BoxIcon>
                    <MoreVert/>
                </BoxIcon>
            </header>
        </Toolbar>
    )
}


export default Profile;