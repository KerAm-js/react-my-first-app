import React from 'react';
import s from './Profile_description.module.css';

export default props => {
  let data = props.data;
  return (
    <div className={s.container}>
      <img className={s.ava} src={data.ava}/>
      <div className={s.text}>
        <h3>{data.nick}</h3>
        <p>{data.fullname}</p>
        <p>{data.location}</p>
        <p>{data.interest}</p>
      </div>
    </div>
  );
}
