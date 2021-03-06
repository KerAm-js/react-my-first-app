import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let items = props.myPosts.map((post, index) => (
    <Post 
      key={index}
      text={post.text} 
      likeCount={post.likeCount} 
      avaLink={props.avaLink} 
    />)
  );

  return (
    <div className={s.container}>
      <h2>My posts</h2>
      <div className={ s.posts }>
        { items }
      </div>
    </div>
  );
};

export default MyPosts;