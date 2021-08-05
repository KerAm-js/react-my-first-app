import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    myPosts: state.profilePage.myPosts,
    avaLink: state.profilePage.profileData.ava,
  };
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;