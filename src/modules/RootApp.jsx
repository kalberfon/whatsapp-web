import { useAuth } from "../hooks/authentication";
import { ChatProvider } from "../hooks/chat";
import { ListProvider } from "../hooks/list";
import { BoxRoot, BoxLeft, BoxRigth} from "../styled-components/BoxRoot"
import Chat from "./Chat";
import Control from "./Control";
import Login from "./Login";
const messages  = [
    {
      direction: "out",
      text: "oii"
    },
    {
      direction: "in",
      text: "oii"
    },
    {
      direction: "out",
      text: "Como esta??"
    }
  ];

const RootApp = () => {
    const {user, logged } = useAuth()

    return logged ? (
        <ListProvider>
            <BoxRoot>
            <BoxLeft>
            <Control user={user}/>
            </BoxLeft>
            
            <ChatProvider>
                <BoxRigth>
                <Chat messages={messages} to={"Fabia"}/>
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