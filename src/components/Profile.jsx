import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.container}>
      <div className={s.data}>
        <img className={s.ava} src="https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"/>
        ava + description
      </div>
      <div className={s.content}>
        <div className={s.posts}>
          <h2>My posts</h2>
          <div className={s.new_post}>
            New post
          </div>
          <ul className={s.list}>
            <li className={s.item}>
              Post1
            </li>
            <li className={s.item}>
              Post2
            </li>
            <li className={s.item}>
              Post3
            </li>
            <li className={s.item}>
              Post4
            </li>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Profile;