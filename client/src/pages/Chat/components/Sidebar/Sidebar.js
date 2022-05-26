import React, { useState, useEffect } from "react";
import Avatar from "../../../../components/Avatar/Avatar";
import CreateContact from "../../../../components/CreateContact/CreateContact";
import {db, server} from "../../../../config/db.config";
import UserProfile from "../../../../components/UserProfile";
import { GENERATE_CHATS } from "../../../../config/messages.config";
import "./Sidebar.css";
import useUser from "../../../../hooks/useUser";

function Sidebar({ currentChat, setCurrentChat, chatContacts, setChatContacts, props }) {
  const user = useUser()
  const [contacts, setContacts] = useState(server)

  // useEffect(async () => {
  //   var response = await fetch(server + "/contacts" + "?user=" + props.user.username);
  //   var data = await response.json();
  //   console.log(data);
  //   setContacts(data);
  // }, []);


  // var postBody = { "userId": loginForm.username, "password": loginForm.password };
  // var params = {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': "application/json",
  //     },
  //     body: JSON.stringify(postBody)
  // }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="align-header">
          <div className="sidebar-header-img" >
            <Avatar profileSRC={user.image} />
          </div>
          <label>{user.nickname}</label>
        </div>
        <div>
          <CreateContact chatContacts={chatContacts} contacts={contacts} setChatContacts={setChatContacts} props={props} />
        </div>
      </div>
      <div className="sidebar-chat-list">
        {chatContacts?.map(userChat => (
          <UserProfile key={userChat.name} userChat={userChat} currentChat={currentChat}
            setCurrentChat={setCurrentChat} props={props} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;