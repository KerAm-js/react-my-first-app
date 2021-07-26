import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

const Dialog = (props) => {
  
  let dialog = props.messages.map(message => (
    <Message sender={message.sender} text={message.text} time={message.time} />
  ))

  return (
    <div className={s.container}>
      <div className={ s.dialog }>
        {dialog}
      </div>
      <div className={ s.send_message }>
        <SendMessage/>
      </div>
    </div>
  );
};

export default Dialog;