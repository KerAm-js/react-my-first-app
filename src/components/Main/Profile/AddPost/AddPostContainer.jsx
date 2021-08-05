import React from 'react';
import { 
  addPostActionCreator, 
  updateNewPostTextActionCreator
} from './../../../../Redux/profile-reducer';
import AddPost from './AddPost';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(
        addPostActionCreator()
      )
    },
    updateNewPostText: (postText) => {
      dispatch(
        updateNewPostTextActionCreator(postText)
      )
    },
  };
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;