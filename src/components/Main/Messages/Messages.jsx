import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Users from './Users/Users';

const Messages = (props) => {
  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        <Dialog messages={props.state.messages}/>
      </div>
      <div className={s.users}>
        <Users users={props.state.users}/>
      </div>
    </div>
  );
};

export default Messages;