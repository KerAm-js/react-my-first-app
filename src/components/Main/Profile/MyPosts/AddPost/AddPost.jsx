import React from 'react';
import s from './AddPost.module.scss';

const AddPost = props => {
  
  let textAreaRef = React.createRef();

  let addNewPost = () => {
    props.dispatch({
      type: "ADD-NEW-POST"
    });
  };

  let updateNewPostText = () => {
    let newText = textAreaRef.current.value;
    props.dispatch({
      type: "UPDATE-NEW-POST-TEXT",
      text: newText,
    });
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