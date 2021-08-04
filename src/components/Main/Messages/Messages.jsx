import React from 'react';
import s from './Messages.module.scss';
import DialogContainer from './Dialog/DialogContainer';
import SendMessageContainer from './SendMessage/SendMessageContainer'
import UsersContainer from './Users/UsersContainer';

const Messages = () => {
  return (
    <div className={ s.container }> 
      <div className={ s.dialog }>
        <DialogContainer/>    
        <SendMessageContainer/>  
      </div>    
      <UsersContainer/>
    </div>
  );
};

export default Messages;