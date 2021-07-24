import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = () => {
  let searchImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png";
  let users = [
    {id: 1, last_message: "last m", username: "Chad", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 2, last_message: "last m", username: "Nick", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 3, last_message: "last m", username: "Eric", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 4, last_message: "last m", username: "Lana", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 5, last_message: "last m", username: "Bob", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 6, last_message: "last m", username: "Meggy", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 7, last_message: "last m", username: "Sally", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 8, last_message: "last m", username: "Chris", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  ];
  return (
    <div className={s.container}>
      <div className={s.search}>
        <img src={searchImage}/>
        <input type="text" placeholder="Search"/> 
      </div>
      <User id={users[0].id} ava_link={users[0].avaLink} username={users[0].username} last_message={users[0].last_message} />
      <User id={users[1].id} ava_link={users[1].avaLink} username={users[1].username} last_message={users[1].last_message} />
      <User id={users[2].id} ava_link={users[2].avaLink} username={users[2].username} last_message={users[2].last_message} />
      <User id={users[3].id} ava_link={users[3].avaLink} username={users[3].username} last_message={users[3].last_message} />
      <User id={users[4].id} ava_link={users[4].avaLink} username={users[4].username} last_message={users[4].last_message} />
      <User id={users[5].id} ava_link={users[5].avaLink} username={users[5].username} last_message={users[5].last_message} />
      <User id={users[6].id} ava_link={users[6].avaLink} username={users[6].username} last_message={users[6].last_message} />
      <User id={users[7].id} ava_link={users[7].avaLink} username={users[7].username} last_message={users[7].last_message} />
    </div>
  );
};

export default Users;