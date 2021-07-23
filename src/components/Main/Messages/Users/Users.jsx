import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = () => {

  return (
    <div className={s.container}>
      <div className={s.search}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png"/>
        <input type="text" placeholder="Search"/> 
      </div>
      <User
          id="1"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="2" 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="3"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="4"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="5"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="7"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          id="8"
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
    </div>
  );
};

export default Users;