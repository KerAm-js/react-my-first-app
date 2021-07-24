import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Users from './Users/Users';

const Messages = (props) => {
  
  let messages = [
    {id: 1, sender : "you", time : "21:13", text : "Hi"},
    {id: 2, sender : "you", time : "21:13", text : "How are you?"},
    {id: 3, sender : "user", time : "21:14", text : "Hello"},
    {id: 4, sender : "user", time : "21:14", text : "I'm fine, thanks"},
    {id: 5, sender : "user", time : "21:15", text : "And you?"},
    {id: 6, sender : "you", time : "21:15", text : "I'm ok"},
   ];

   let users = [
    {id: 1, lastMessage: "last m", username: "Chad", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 2, lastMessage: "last m", username: "Nick", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 3, lastMessage: "last m", username: "Eric", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 4, lastMessage: "last m", username: "Lana", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 5, lastMessage: "last m", username: "Bob", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 6, lastMessage: "last m", username: "Meggy", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 7, lastMessage: "last m", username: "Sally", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 8, lastMessage: "last m", username: "Chris", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  ];

  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        <Dialog messages={messages}/>
      </div>
      <div className={s.users}>
        <Users users={users}/>
      </div>
    </div>
  );
};

export default Messages;