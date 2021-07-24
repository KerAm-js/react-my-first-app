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

  return (
    <div className={s.container}>
      <Message sender={messages[0].sender} text={messages[0].text} time={messages[0].time}/>
      <Message sender={messages[1].sender} text={messages[1].text} time={messages[1].time}/>
      <Message sender={messages[2].sender} text={messages[2].text} time={messages[2].time}/>
      <Message sender={messages[3].sender} text={messages[3].text} time={messages[3].time}/>
      <Message sender={messages[4].sender} text={messages[4].text} time={messages[4].time}/>
      <Message sender={messages[4].sender} text={messages[5].text} time={messages[5].time}/>
    </div>
  );
};

export default Dialog;