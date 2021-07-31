import React from 'react';
import s from './Dialog.module.scss';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

const Dialog = (props) => {
  
  let dialog = props.messages.map( (message,index) => (
    <Message 
      key={ index }
      sender={ message.sender } 
      text={ message.text } 
      time={ message.time } 
    />
  ))
  
  return (
    <div className={ s.container }>
      <div className={ s.dialog }>
        {dialog}
      </div>
      <div className={ s.send_message }>
        <SendMessage 
          newMessageText={ props.newMessageText }
          dispatch={ props.dispatch }
        />
      </div>
    </div>
  );
};

export default Dialog;