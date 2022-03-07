import Search from "./inner-components/Search";
import Item from "../../styled-components/Chat/Item";
import RootList from "../../styled-components/Chat/RootList";

const ChatList = ({ talks = [], itemClick = (data) => console.log(data), selected = "" }) => {
    return (
        <>
            <Search/>
            <RootList>
                {talks.map((item, index) => 
                    <Item name={item.name} key={index} subtitle={item.subtitle} onClick={() => itemClick(item)} selected={item.channelId === selected}/>
                )}
            </RootList>
        </>
    );
}


export default ChatList;