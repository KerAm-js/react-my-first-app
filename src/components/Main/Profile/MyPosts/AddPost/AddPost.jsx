import React from 'react';
import s from './AddPost.module.scss';

const AddPost = props => {
  
  let onAddPost = () => {
    props.addPost();
  };

  let onUpdateNewPostText = (event) => {
    let postText = event.target.value;
    props.updateNewPostText(postText);
  };

  return (<div className={ s.new_post }>
    <textarea 
      value={ props.newPostText }
      onChange={ onUpdateNewPostText }
      placeholder="Введите текст"
    />
    <div>
      <button onClick={ onAddPost }>Add post</button>
    </div>
  </div>)
}

export default AddPost;