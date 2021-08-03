import React from 'react';
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator
} from './../../../../../Redux/profile-reducer';
import AddPost from './AddPost';

const AddPostContainer = props => {

  let addPost = () => {
    props.store.dispatch(
      addPostActionCreator()
    )
  }

  let updateNewPostText = (postText) => {
    props.store.dispatch(
      updateNewPostTextActionCreator(postText)
    )
  }

  return (
    <AddPost
      newPostText={ props.store.getState().profilePage.newPostText}
      addPost={ addPost }
      updateNewPostText={ updateNewPostText }
    />
  )
}

export default AddPostContainer;