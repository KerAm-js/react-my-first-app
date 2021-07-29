import React from 'react';
import s from './AddPost.module.scss';


export default (props) => {
  
  let textAreaRef = React.createRef();

  let addNewPost = () => {
    props.addPost();
  };

  let updateNewPostText = () => {
    let newText = textAreaRef.current.value;
    props.updateNewPostText(newText);
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