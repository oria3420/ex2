import React from "react";
import { showOnlyHour } from "../../config/time.config";
import useUser from "../../hooks/useUser";
import "./ChatMessage.css";

function ChatMessage({ message, time, username, image, video, audio }) {
  const user = useUser();
  return (
    <div className={`chat-message ${user.username === username ? 'my-msg': 'mate-msg' }`}>
      <div className="chat-message-text">
        <label>{message}</label>
      </div>
      {image && <ImageMSG image={image}/>}
      {video && <VideoMSG video={video}/>}
      {audio && <AudioMSG audio={audio}/>}
      <div className="chat-message-date">
        <p>{showOnlyHour(time)}</p>
      </div>
    </div>
  );
}

function ImageMSG({ image }){
  if(image !== undefined && image.length > 0){
    return (
    <img src={image} alt="msg-img" style={{marginBlock: "1rem"}}/>
    )
  }
  return(<div/>)
}
function VideoMSG({ video }){
    return (
    <video src={video} style={{width: "100%"}} controls />
    )
}
function AudioMSG({ audio }){
  console.log(audio)
  return (
  <audio src={audio} controls />
  )
}

export default ChatMessage;