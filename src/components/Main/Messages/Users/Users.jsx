import React from 'react';
import s from './Users.module.scss';
import User from './User/User';

const Users = (props) => {
  
  let list = props.users.map( (user,index) => (
    <User
      key={ index } 
      id={ user.id } 
      ava={ user.ava } 
      username={ user.username } 
      last_message={ user.lastMessage }
    />
  ))
  return (
    <div className={ s.container }>
      <div className={ s.search }>
        <img src={ props.searchImage } alt="Search should be here"/>
        <input type="text" placeholder="Search"/> 
      </div>
      <div className={ s.usersList }>
        { list }
      </div>
    </div>
  );
};

export default Users;