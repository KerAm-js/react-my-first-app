import React from 'react';
import s from './AddPost.module.css';

export default props => (
  <div className={s.new_post}>
    <textarea></textarea>
    <div>
      <button>Add post</button>
    </div>
  </div>
)