import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profile_description from './Description/Profile_description';

const Profile = () => {
  let posts = [
    {id: 1, text: "Hello, I use Lists", likeCount: 12},
    {id: 2, text: "How are you, users?", likeCount: 25},
    {id: 3, text: "This is a good application", likeCount: 40},
    {id: 4, text: "I like it", likeCount: 29},
  ];
  
  let profileData = {
    ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    nick: "Kerimov777",
    fullname: "Amir Kerimov",
    location: "Chechen Republic",
    interest: "Programming, mathematics, logistics, business"
  }

  return (
    <div className={s.container}>
      <Profile_description data={profileData}/>
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;