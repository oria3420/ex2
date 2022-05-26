import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useRef, useState } from 'react'
import { GenerateChatContact } from '../../config/messages.config'
import useUser from '../../hooks/useUser';
import server from '../../config/db.config'

const CreateContact = ({ chatContacts, setChatContacts, contacts, props }) => {
  const [show, setShow] = useState(false);
  const user = useUser()
  const userInputRef = useRef()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function handleAddContact() {
    if (userInputRef.current) {
      const { value } = userInputRef.current
      if (value.trim().length === 0) {
        alert("username must be 1 char at least.")
        return;
      }
      const foundContact = contacts.find(elem => elem.username === value)
      const duplicateContact = chatContacts.find(elem => elem.username === value)
      if (duplicateContact) {
        alert("user already in Chats Contacts, try a new one!")
        return;
      }
      if (foundContact && user.username !== foundContact.username) {
        var postBody = {  };
        var params = {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(postBody)
        }
        var response = await fetch(server + "/contacts/?user=" + props.user.username,params);
        setChatContacts(prev =>
          [...prev, { ...GenerateChatContact(foundContact, user.username, []) }])
        handleClose()
        return;
      } else {
        alert("We Couldn't find that user, please try again")
      }

    }
  }

  //   // var response = await fetch(server + "/contacts" + "?user=" +userChat.id, params);
  //   // if(response.status === 200) {
  //   //     var data = await response.json();
  //   //     // var user = { username: loginForm.username, password: loginForm.password, image: DEFAULT_IMAGE, 
  //   //     //     nickname: data.name };
  //   //     // setUser(user)
  //   //     // setUserStatus(USER_STATUSES.LOGGED_IN)
  //   //     // setTimeout(() => navigate("/Chat"), 200)
  //   // }
  //     console.log("Fetch to: " + server + "/contacts/" + userChat.id +  "/messages?user=" +props.user.username)
  //       var response = await fetch( server + "/contacts/" +userChat.id + "/messages?user=" +props.user.username);
  //       var data = await response.json();
  //       console.log(": " + data.userChat);
  //       //userChat.lastMessage=data.lastMessage
  //       //setCurrentChat(userChat);
  //        currentChat = data;
  // }
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
          </path>
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z">
          </path>
        </svg>
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input ref={userInputRef} class="form-control" placeholder="Contact's username" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddContact}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateContact