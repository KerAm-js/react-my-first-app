import React from 'react';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';

const User = (props) => {
  let username = props.username[0].toUpperCase() + props.username.slice(1); 
  let path = '/messages/' + props.id;

  return (
    <div className={s.container}>
      <NavLink to={path} className={s.link} activeClassName={s.active}>
        <div className={s.content}>
          <div className={s.ava}>
            <img src={props.ava}/>
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
      </NavLink>
    </div>
    
  );
};

export default User;