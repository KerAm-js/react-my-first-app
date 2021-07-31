import React from 'react';
import s from './Messages.module.scss';
import Dialog from './Dialog/Dialog';
import Users from './Users/Users';

const Messages = (props) => {
  return (
    <div className={ s.container }>
      <div className={ s.dialogs }>
        <Dialog 
          messages={ props.messagesPage.messages }
          newMessageText={ props.messagesPage.newMessageText }
          dispatch={ props.dispatch }
        />
      </div>
      <div className={ s.users }>
        <Users 
          users={ props.messagesPage.users }
        />
      </div>
    </div>
  );
};

export default Messages;