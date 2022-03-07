import { useEffect } from "react";
import ChatList from "../components/ChatList";
import Profile from "../components/Profile";
import UpdatedArea from "../components/UpdatedArea";
import { useItemSelected, useList } from "../hooks/list";

const Control = ({ user , onChangeChannelId}) => {
    const  { selectedItem, list } = useList()
    const { onSelected } = useItemSelected()
    useEffect(() => {
        onChangeChannelId(selectedItem?.channelId)
    }, [selectedItem, onChangeChannelId]);
    return (
       <>
        <Profile/>
        <UpdatedArea/>
        <ChatList itemClick={(data) => onSelected(data)} talks={list} selected={selectedItem?.channelId || ""}/>
       </>
    )
}


export default Control;