import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profile_description from './Description/Profile_description';

const Profile = (props) => {
  return (
    <div className={s.container}>
      <Profile_description profileData={props.profileData}/>
      <MyPosts myPosts={props.myPosts} avaLink={props.profileData.ava}/>
    </div>
  );
};

export default Profile;