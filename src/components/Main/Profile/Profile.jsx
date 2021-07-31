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
        myPosts={ props.profilePage.myPosts }
        avaLink={ props.profilePage.profileData.ava }
        newPostText={ props.profilePage.newPostText }
        dispatch={ props.dispatch }
      />
    </div>
  );
};

export default Profile;