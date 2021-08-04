import React from 'react';
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator
} from './../../../../Redux/profile-reducer';
import AddPost from './AddPost';
import StoreContext from './../../../../contextAPI/Context';


const AddPostContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        store => {
          let addPost = () => {
            store.dispatch(
              addPostActionCreator()
            )
          }
          let updateNewPostText = (postText) => {
            store.dispatch(
              updateNewPostTextActionCreator(postText)
            )
          }
          return (
            <AddPost
              newPostText={ store.getState().profilePage.newPostText }
              addPost={ addPost }
              updateNewPostText={ updateNewPostText }
            />
          );
        }
      }
    </StoreContext.Consumer>
    
  )
}

export default AddPostContainer;