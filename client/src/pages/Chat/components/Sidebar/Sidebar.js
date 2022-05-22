import React, { useState } from "react";
import Avatar from "../../../../components/Avatar/Avatar";
import CreateContact from "../../../../components/CreateContact/CreateContact";
import db from "../../../../config/db.config";
import UserProfile from "../../../../components/UserProfile";
import { GENERATE_CHATS } from "../../../../config/messages.config";
import "./Sidebar.css";
import useUser from "../../../../hooks/useUser";

function Sidebar({ currentChat, setCurrentChat, chatContacts, setChatContacts }) {
  const user = useUser()
  const [contacts, setContacts] = useState(db)
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="align-header">
        <div className="sidebar-header-img" >
        <Avatar profileSRC={user.image}/>
        </div>
        <label>{user.nickname}</label>
        </div>
        <div>
        <CreateContact chatContacts={chatContacts} contacts={contacts} setChatContacts={setChatContacts} />
        </div>
      </div>
      <div className="sidebar-chat-list">
        {chatContacts?.map(userChat => (
          <UserProfile key={userChat.nickname} userChat={userChat} currentChat={currentChat}
          setCurrentChat={setCurrentChat}/>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;