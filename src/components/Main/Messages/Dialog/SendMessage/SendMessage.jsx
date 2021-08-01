import React from 'react';
import s from './SendMessage.module.scss';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from './../../../../../Redux/messagesReducer';

const SendMessage = (props) => {
  
  let sendNewMessage = () => {
    props.dispatch(
      sendMessageActionCreator()
    );
  };
  let updateNewMessageText = (event) => {
    let messageText = event.target.value;
    props.dispatch(
      updateNewMessageTextActionCreator(messageText)
    );
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