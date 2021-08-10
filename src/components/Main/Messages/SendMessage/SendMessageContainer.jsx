import { connect } from 'react-redux';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../../Redux/messages-reducer';
import SendMessage from './SendMessage';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(
        sendMessageActionCreator()
      );
    },
    updateNewMessageText: (messageText) => {
      dispatch(
        updateNewMessageTextActionCreator(messageText)
      );
    },
  };
};

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;