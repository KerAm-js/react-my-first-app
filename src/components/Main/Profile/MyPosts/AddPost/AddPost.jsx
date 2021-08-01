import React from 'react';
import s from './AddPost.module.scss';
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator
} from './../../../../../Redux/profileReducer';

const AddPost = props => {
  let addNewPost = () => {
    props.dispatch(
      addPostActionCreator()
    );
  };

  let updateNewPostText = (event) => {
    let postText = event.target.value;
    props.dispatch(
      updateNewPostTextActionCreator(postText)
    );
  };

  return (<div className={ s.new_post }>
    <textarea 
      value={ props.newPostText }
      onChange={ updateNewPostText }
      placeholder="Введите текст"
    />
    <div>
      <button onClick={ addNewPost }>Add post</button>
    </div>
  </div>)
}

export default AddPost;