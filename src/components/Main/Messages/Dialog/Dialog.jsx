import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';

const Dialog = (props) => {
  
  let messages = [
   {id: 1, sender : "you", time : "21:13", text : "Hi"},
   {id: 2, sender : "you", time : "21:13", text : "How are you?"},
   {id: 3, sender : "user", time : "21:14", text : "Hello"},
   {id: 4, sender : "user", time : "21:14", text : "I'm fine, thank you"},
   {id: 5, sender : "user", time : "21:15", text : "And you?"},
   {id: 6, sender : "you", time : "21:15", text : "I,m ok"},
  ];

  let dialog = messages.map(message => (
    <Message sender={message.sender} text={message.text} time={message.time} />
  ))

  return (
    <div className={s.container}>
      {dialog}
    </div>
  );
};

export default Dialog;