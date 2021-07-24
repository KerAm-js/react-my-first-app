import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = () => {
  let searchImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png";
  let users = [
    {id: 1, lastMessage: "last m", username: "Chad", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 2, lastMessage: "last m", username: "Nick", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 3, lastMessage: "last m", username: "Eric", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 4, lastMessage: "last m", username: "Lana", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 5, lastMessage: "last m", username: "Bob", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 6, lastMessage: "last m", username: "Meggy", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 7, lastMessage: "last m", username: "Sally", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 8, lastMessage: "last m", username: "Chris", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  ];

  let list = users.map(user => (
    <User id={user.id} ava_link={user.avaLink} username={user.username} last_message={user.lastMessage}/>
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