import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profile_data from './Data/Profile_data';

const Profile = () => {
  return (
    <div className={s.container}>
      <Profile_data/>
      <MyPosts/>
    </div>
  );
};

export default Profile;