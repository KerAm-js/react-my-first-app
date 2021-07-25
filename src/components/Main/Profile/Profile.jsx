import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
  return (
    <div className={s.container}>
      <ProfileData profileData={props.state.profileData}/>
      <MyPosts myPosts={props.state.myPosts} avaLink={props.state.profileData.ava}/>
    </div>
  );
};

export default Profile;