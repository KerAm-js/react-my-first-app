import React from 'react';
import s from './ProfileData.module.css';

export default props => {
  return (
    <div className={s.container}>
      <img className={s.ava} src={props.profileData.ava}/>
      <div className={s.text}>
        
          <h3>{props.profileData.nick}</h3>
          <button>Edit profile</button>
          <div className={s.main}> 
            <div className={s.posts_count}>
              posts: {props.profileData.postsCount}
            </div>
            <div className={s.friends_count}>
              friends: {props.profileData.friendsCount}
            </div>
            <div className={s.interests_count}>
              interests: {props.profileData.interestsCount}
            </div>
            <div className={s.name}>
              {props.profileData.fullname}
            </div>
          </div>
      </div>
    </div>
  );
};
