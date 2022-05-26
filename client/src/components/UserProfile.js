import React, { useEffect, useRef, useState } from "react"
import { showTimeDiff } from "../config/time.config";
import Avatar from "./Avatar/Avatar";
import "./UserProfile.css";
import {server} from "../config/db.config"

function UserProfile({ userChat, setCurrentChat, currentChat, props }) {
  
  async function onChatUserClick() {
    setCurrentChat(userChat);
     var postBody = {  };
    var params = {
        headers: {
            'Content-Type': "application/json",
        },
         body: JSON.stringify(postBody)
    }
      //console.log("Fetch to: " + server + "/contacts/" + userChat.id +  "/messages?user=" +props.user.username)
        var response = await fetch( server + "/contacts/" +userChat.id + "/messages?user=" +props.user.username);
        var data = await response.json();
        console.log(": " + data.userChat);
        //userChat.lastMessage=data.lastMessage
        //setCurrentChat(userChat);
         currentChat = data;
  }

  return (
    <div className={`user-profile ${currentChat?.name === userChat.name ? 'selected-chat' : ''}`} onClick={onChatUserClick}>
      <div className="sidebar-header-img">
        <Avatar profileSRC={userChat.image} />
      </div>
      <div className="user-info">
        <div className="inline-flex">
          <h4 className="user-name">{userChat.name} </h4>
          <label>{showTimeDiff(userChat?.lastMessageTime)} </label>
        </div>
        <div className="cut-text">{userChat?.lastMessage || ''} </div>
      </div>
    </div>
  );
}

export default UserProfile;
