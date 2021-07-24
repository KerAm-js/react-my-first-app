import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.post}>
      <div className={s.ava}>
        <img src={props.avaLink}/>
      </div>
      <div className={s.text}>
        {props.text}
      </div>
      <div className={s.like}>
      <span> {props.likeCount} </span><button>like</button>
      </div>
    </div>      
  );
};

export default Post;