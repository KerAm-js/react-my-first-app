import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';

const Dialog = (props) => {
  return (
    <div className={s.container}>
      <Message text="Hi" time="21:13" sender="you"/>
      <Message text="How are you?" time="21:13" sender="you"/>
    </div>
  );
};

export default Dialog;