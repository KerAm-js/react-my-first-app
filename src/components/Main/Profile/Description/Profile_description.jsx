import React from 'react';
import s from './Profile_description.module.css';

export default props => {
  let data = {
    ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    nick: "Kerimov777",
    fullname: "Amir Kerimov",
    location: "Chechen Republic",
    interest: "Programming, mathematics, logistics, business"
  }
  
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
