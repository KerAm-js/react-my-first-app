import React from 'react';
import s from './SendMessage.module.scss';

const SendMessage = (props) => {
  
  let textAreaRef = React.createRef();
  
  let sendNewMessage = () => {
    props.dispatch({
      type: "SEND-MESSAGE",
    });
  };
  let updateNewMessageText = () => {
    let newText = textAreaRef.current.value;
    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      text: newText,
    });
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