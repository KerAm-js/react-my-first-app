import React from 'react';
import s from './SendMessage.module.css';

const SendMessage = (props) => {
  
  let textAreaRef = React.createRef();
  
  let sendMessage = () => {
    alert(textAreaRef.current.value);
  };

  return (
    <div className={ s.container }>
      <textarea ref={ textAreaRef }></textarea>
      <button onClick={ sendMessage }>Send</button>
    </div>
  )
}

export default SendMessage;