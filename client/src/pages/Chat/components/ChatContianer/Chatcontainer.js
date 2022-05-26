import React, { useEffect, useRef, useState } from "react"
import "./Chatcontainer.css";
import ChatMessage from "../../../../components/ChatMessage/ChatMessage";
import { fomatCurrentDate } from "../../../../config/time.config";
import useUser from "../../../../hooks/useUser";
import MediaUpload from "../MediaUpload";
import {server} from '../../../../config/db.config'
import { format } from "date-fns";

function Chatcontainer({ currentChat, setCurrentChat, chatContacts, setChatContacts }) {
  const inputRef = useRef()
  const [mediaUpload, setMediaUpload] = useState()
  const msgRef = useRef()
  const user = useUser()

  // FETCH MESSAGES OF CHAT -- DOESN'T WORK
  // useEffect(async () => {
  //   if (currentChat !== undefined) {
  //   console.log("Fetch to: " + server + "/contacts/" + currentChat.chatContacts.name + "/messages")
  //     var response = await fetch(server + "/contacts/" + currentChat.nickname + "/messages?user=" + user.id);
  //     var data = await response.json();
  //     console.log("Oriya: " + data);
  //     setCurrentChat(data);
  //     // currentChat.chat = data;
  //   }
  // }, []);


  function hideMediaUpload() {
    // let mediaUpload = document.getElementById('mediaUpload');
    // mediaUpload.style.visibility = 'hidden';
  }

  const onNewMessage = () => {

    if (inputRef.current.value.trim().length === 0 && !mediaUpload) {
      return alert("you must type at least one letter")
    }

    let newMSG = {
      content: inputRef.current.value,
      timestamp: fomatCurrentDate,
      username: user?.username,
    }
    if(mediaUpload && inputRef.current.value.trim().length === 0){
      if (mediaUpload?.image) {
        newMSG.image = mediaUpload.image
      }
      if (mediaUpload?.video) {
        newMSG.video = mediaUpload.video
      }
      if (mediaUpload?.audio) {
        newMSG.audio = mediaUpload.audio
      }
    }
    const newChatContacts = chatContacts.map(userObj => {
      if (userObj.username === currentChat.username) {
        return { ...userObj, lastMessageTime: newMSG.timestamp, lastMessage: newMSG.content, chat: [...userObj.chat, newMSG] }
      }
      return userObj;
    })

    setChatContacts(newChatContacts)
    setCurrentChat(curr => ({ ...curr, chat: [...curr.chat, newMSG] }))
    inputRef.current.value = ''
    hideMediaUpload();
    setMediaUpload()
  }

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [currentChat?.chat])

  function showMediaUpload() {
    let mediaUpload = document.getElementById('mediaUpload');
    mediaUpload.style.visibility = 'visible';
  }


  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img src={currentChat?.image} alt="" />
          </div>
          <p> {currentChat?.name} </p>
        </div>
      </div>

      <div className="chat-display-container">
        {!currentChat ? (
          <div className="chat-display-bg"></div>
        ) : (<>
          <div className="chat-bubble-continer" onClick={hideMediaUpload}>
          {currentChat.chat?.map(chatMsg => (
            <ChatMessage key={chatMsg.timestamp} username={chatMsg.username} audio={chatMsg.audio}
              message={chatMsg.content} time={chatMsg.timestamp} video={chatMsg.video} image={chatMsg.image} />
          ))}
            <div ref={msgRef}></div>
          </div>
          <div className="chat-input">
            <MediaUpload mediaUpload={mediaUpload} setMediaUpload={setMediaUpload}/>

            <input id="input" ref={inputRef} placeholder="Type new message here..." />
            <button id="sendBtn" onClick={onNewMessage} className="chat-input-send-btn" formAction='javascript:alert("Bingo!");'>send</button>
          </div>
        </>)}

      </div>
    </div>
    
  );
}

export default Chatcontainer;
