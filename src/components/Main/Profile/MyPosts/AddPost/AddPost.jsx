import React from 'react';
import s from './AddPost.module.css';


export default (props) => {
  
  let textAreaRef = React.createRef();

  let addPost = () => {
    let message = textAreaRef.current.value;
    alert(message);
  };

  return (<div className={ s.new_post }>
    <textarea ref={ textAreaRef }></textarea>
    <div>
      <button onClick={ addPost }>Add post</button>
    </div>
  </div>)
}