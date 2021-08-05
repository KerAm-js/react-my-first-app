import React from 'react';
import Dialog from './Dialog';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
  };
};

const DialogContainer = connect(mapStateToProps)(Dialog);

export default DialogContainer;