import React from 'react';
import s from './Message.module.scss';

const Message = (props) => {
  return (
    <div className={`${s.container} ${props.sender}`}>
      <div className={s.text}>
        {props.text}
      </div>
      <div className={s.time}>
        {props.time}
      </div>
    </div>
  );
};

export default Message;