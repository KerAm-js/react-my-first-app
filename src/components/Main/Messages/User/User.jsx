import React from 'react';
import s from './User.module.css';

const User = (props) => {
  let username = props.username[0].toUpperCase() + props.username.slice(1); 
  return (
    <div className={s.container}>
      <div className={s.ava}>
        <img src={props.ava_link}/>
      </div>
      <div className={s.info}>
        <div className={s.username}>
          {username}
        </div>
        <div className={s.last_message}>
          {props.last_message}
        </div>
      </div>
    </div>
  );
};

export default User;