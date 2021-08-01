import React from 'react';
import s from './AddPost.module.scss';
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator
} from './../../../../../Redux/State';

const AddPost = props => {
  
  let textAreaRef = React.createRef();

  let addNewPost = () => {
    props.dispatch(
      addPostActionCreator()
    );
  };

  let updateNewPostText = () => {
    let postText = textAreaRef.current.value;
    props.dispatch(
      updateNewPostTextActionCreator(postText)
    );
  };

  return (<div className={ s.new_post }>
    <textarea 
      ref={ textAreaRef }
      value={ props.newPostText }
      onChange={ updateNewPostText }
    />
    <div>
      <button onClick={ addNewPost }>Add post</button>
    </div>
  </div>)
}

export default AddPost;