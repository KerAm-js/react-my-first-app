import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';

const Dialog = (props) => {
  
  let dialog = props.messages.map(message => (
    <Message sender={message.sender} text={message.text} time={message.time} />
  ))

  return (
    <div className={s.container}>
      {dialog}
    </div>
  );
};

export default Dialog;