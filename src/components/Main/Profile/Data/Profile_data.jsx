import React from 'react';
import s from './Profile_data.module.css';

const Profile_data = () => {
  return (
    <div className={s.data_content}>
      <img className={s.ava} src="https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"/>
      ava + description
    </div>
  );
};
 export default Profile_data;
