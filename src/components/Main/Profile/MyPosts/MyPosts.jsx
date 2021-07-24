import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import AddPost from './AddPost/AddPost';

const MyPosts = () => {
  
  let avaLink = "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80";
  let posts = [
    {id: 1, text: "Hello, I use Lists", likeCount: 12},
    {id: 2, text: "How are you, users?", likeCount: 25},
    {id: 3, text: "This is a good application", likeCount: 40},
    {id: 4, text: "I like it", likeCount: 29},
  ];

  let items = posts.map( post => (
    <Post text={post.text} likeCount={posts.likeCount} avaLink={avaLink} />)
  );

  return (
    <div className={s.container}>
      <h2>My posts</h2>
      <AddPost/>
      <div className={s.posts}>
        {items}
      </div>
    </div>
  );
};

export default MyPosts;