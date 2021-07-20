import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.ava}>
        <img src="https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"/>
      </div>
      <div className={s.text}>
        Post 1
      </div>
      <div className={s.like}>
        <button>like</button>
      </div>
    </div>      
  );
};

export default Post;