import React from 'react';
import s from './SendMessage.module.scss';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from './../../../../../Redux/State';

const SendMessage = (props) => {
  
  let textAreaRef = React.createRef();
  
  let sendNewMessage = () => {
    props.dispatch(
      sendMessageActionCreator()
    );
  };
  let updateNewMessageText = () => {
    let messageText = textAreaRef.current.value;
    props.dispatch(
      updateNewMessageTextActionCreator(messageText)
    );
  };
  
  return (
    <div className={ s.container }>
      <textarea 
        ref={ textAreaRef }
        value={ props.newMessageText }
        onChange= { updateNewMessageText }
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