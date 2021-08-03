import React from 'react';
import s from './Dialog.module.scss';
import Message from './Message/Message';
import SendMessageContainer from './SendMessage/SendMessageContainer';

const Dialog = (props) => {
  
  let dialog = props.messages.map((message,index) => (
    <Message 
      key={ index }
      sender={ message.sender } 
      text={ message.text } 
      time={ message.time } 
    />
  ));

  return (
    <div className={ s.container }>
      <div className={ s.dialog }>
        { dialog }
      </div>
      <div className={ s.send_message }>
        <SendMessageContainer 
          store={ props.store }
        />
      </div>
    </div>
  );
};

export default Dialog;