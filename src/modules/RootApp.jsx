import { useState } from "react";
import { useAuth } from "../hooks/authentication";
import { ChatProvider } from "../hooks/chat";
import { ListProvider } from "../hooks/list";
import { BoxRoot, BoxLeft, BoxRigth} from "../styled-components/BoxRoot"
import Chat from "./Chat";
import Control from "./Control";
import Login from "./Login";

const RootApp = () => {
  const [channelId, setChannelId] = useState("")
  const {user, logged } = useAuth()

    return logged ? (
      <ListProvider>
            <BoxRoot>
                <BoxLeft>
                <Control user={user} onChangeChannelId={(data) => setChannelId(data)} />
                </BoxLeft>
            <ChatProvider channelId={channelId}>
                <BoxRigth>
                <Chat username={user}/>
                </BoxRigth>
            </ChatProvider>
        </BoxRoot>
      </ListProvider>
      
    ) : 
    (
        <Login/>
    )
}


export default RootApp;