import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
  return (
    <div className={ s.container }>
      <ProfileData 
        profileData={ props.profilePage.profileData }
      />

      <MyPosts 
        avaLink={ props.profilePage.profileData.ava }
        myPosts={ props.profilePage.myPosts }
        store={ props.store }
      />
    </div>
  );
};

export default Profile;