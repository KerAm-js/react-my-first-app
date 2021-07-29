import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {

  return (
    <div className={s.post}>
      <div className={s.ava}>
        <img src={props.avaLink} alt="Ava should be here"/>
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