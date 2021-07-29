import React from 'react';
import s from './SendMessage.module.scss';

const SendMessage = (props) => {
  
  let textAreaRef = React.createRef();
  let sendNewMessage = () => {
    let newMessage = textAreaRef.current.value;
    props.sendMessage(newMessage);
    textAreaRef.current.value = '';
  }

  return (
    <div className={ s.container }>
      <textarea 
        ref={ textAreaRef }
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