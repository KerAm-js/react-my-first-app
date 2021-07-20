import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'
const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h2>My posts</h2>
      <div className={s.new_post}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.list}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;