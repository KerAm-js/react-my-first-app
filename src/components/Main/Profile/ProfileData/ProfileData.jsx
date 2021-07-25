import React from 'react';
import s from './ProfileData.module.css';

export default props => {
  let profileData = props.profileData;
  return (
    <div className={s.container}>
      <img className={s.ava} src={profileData.ava}/>
      <div className={s.text}>
        <h3>{profileData.nick}</h3>
        <p>{profileData.fullname}</p>
        <p>{profileData.location}</p>
        <p>{profileData.interest}</p>
      </div>
    </div>
  );
}
