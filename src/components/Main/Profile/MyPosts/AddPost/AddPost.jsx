import React from 'react';
import s from './AddPost.module.css';


export default (props) => {
  
  let textAreaRef = React.createRef();

  let addNewPost = () => {
    let message = textAreaRef.current.value;
    props.addPost(message);
    textAreaRef.current.value = '';
  };

  return (<div className={ s.new_post }>
    <textarea ref={ textAreaRef }></textarea>
    <div>
      <button onClick={ addNewPost }>Add post</button>
    </div>
  </div>)
}