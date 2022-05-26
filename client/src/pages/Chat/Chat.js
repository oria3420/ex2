import Sidebar from "./components/Sidebar/Sidebar"
import "./Chat.css";
import Chatcontainer from "./components/ChatContianer/Chatcontainer";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GENERATE_CHATS } from "../../config/messages.config";
import { server} from "../../config/db.config";
import useUser from './../../hooks/useUser';

function Chat( props ) {
    const user = useUser()
    const [currentChat, setCurrentChat] = useState()
    const [chatContacts, setChatContacts] = useState([])
    const navigate = useNavigate()
    var userId = props.user.username;

    useEffect(async() => {
        console.log(props.user.username)
        var response = await fetch(server + "/contacts"+"?user="+ props.user.username);
        var data = await response.json();
        console.log(data);
        setChatContacts(data);
    }, []);
    
    return (
        <div className="chatpage">
           <nav className="navbar" id="screen-title">
                <div className="container-fluid">
                    <a className="navbar-brand text-right" id="WebChat-text" onClick={() => navigate('/')}>
                        <img src="WebChat logo.png" alt="" width="50" height="40" className="d-inline-block"  style={{ margin: '0 5px' }} />
                        WebChat
                    </a>
                </div>
            </nav>
            <div className="chatpage-container  chat-bg">
                {/* sidebar */}
                <Sidebar chatContacts={chatContacts} setChatContacts={setChatContacts} currentChat={currentChat} setCurrentChat={setCurrentChat} props={props} />
                {/* chatcontainer */}
                <Chatcontainer currentChat={currentChat} setCurrentChat={setCurrentChat} chatContacts={chatContacts} setChatContacts={setChatContacts}/>
            </div>
        </div>
    );
}

export default Chat;