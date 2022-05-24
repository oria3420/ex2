import React from "react";
import { showTimeDiff } from "../config/time.config";
import Avatar from "./Avatar/Avatar";
import "./UserProfile.css";

function UserProfile({ userChat, setCurrentChat, currentChat }) {
  
  const onChatUserClick = () => {
    setCurrentChat(userChat);
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
