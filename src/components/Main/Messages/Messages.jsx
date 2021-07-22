import React from 'react';
import s from './Messages.module.css';
import User from './User/User';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {
  return (
    <div className={s.container}>
      <div className={s.dialog}>
        <Dialog/>
      </div>
      <div className={s.users}>
        <div className={s.search}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png"/>
          <input type="text" placeholder="Search"/> 
        </div>
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
        <User 
          ava_link="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" 
          username="username" 
          last_message="last message"
        />
      </div>
    </div>
  );
};

export default Messages;