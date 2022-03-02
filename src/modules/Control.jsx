import ChatList from "../components/ChatList";
import Profile from "../components/Profile";
import UpdatedArea from "../components/UpdatedArea";

const Control = ({ user }) => {


    return (
       <>
        <Profile profileName={user.name || "sem nome o infeliz"}/>
        <UpdatedArea/>
        <ChatList onClickItem={() => console.log('clicou em um')}/>
       </>
    )
}


export default Control;