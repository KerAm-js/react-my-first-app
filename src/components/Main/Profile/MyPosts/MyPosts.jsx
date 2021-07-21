import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'
const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h2>My posts</h2>
      <div className={s.new_post}>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.list}>
        <Post text="Hello, I use Lists" likeCount="12"/>
        <Post text="How are you, users?" likeCount="25"/>
      </div>
    </div>
  );
};

export default MyPosts;