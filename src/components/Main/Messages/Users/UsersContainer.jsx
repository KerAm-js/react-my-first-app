import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
    searchImage: state.messagesPage.images.searchImage,
  }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;