import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profile_description from './Description/Profile_description';

const Profile = () => {
  return (
    <div className={s.container}>
      <Profile_description/>
      <MyPosts/>
    </div>
  );
};

export default Profile;