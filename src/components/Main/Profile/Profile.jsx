import React from 'react';
import s from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileDataContainer from './ProfileData/ProfileDataContainer';
import AddPostContainer from './AddPost/AddPostContainer';

const Profile = () => {
  return (
    <div className={ s.container }>
      <ProfileDataContainer/>
      <AddPostContainer/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;