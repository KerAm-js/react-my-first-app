import React from 'react';
import s from './SendMessage.module.scss';

const SendMessage = (props) => {
  
  let sendNewMessage = () => {
    props.sendMessage()
  };
  let updateNewMessageText = (event) => {
    let messageText = event.target.value;
    props.updateNewMessageText(messageText);
  };
  
  return (
    <div className={ s.container }>
      <textarea 
        value={ props.newMessageText }
        onChange= { updateNewMessageText }
        placeholder="Сообщение"
      />
      <button 
        onClick={ sendNewMessage }
      >
        Send
      </button>
    </div>
  )
}

export default SendMessage;