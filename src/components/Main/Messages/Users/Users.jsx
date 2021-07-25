import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = (props) => {
  let searchImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png";
  
  let list = props.users.map(user => (
    <User id={user.id} ava={user.ava} username={user.username} last_message={user.lastMessage}/>
  ))
  return (
    <div className={s.container}>
      <div className={s.search}>
        <img src={searchImage}/>
        <input type="text" placeholder="Search"/> 
      </div>
      <div className={s.usersList}>
        {list}
      </div>
    </div>
  );
};

export default Users;