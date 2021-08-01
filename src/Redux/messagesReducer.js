const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (state.newMessageText) {
        let newMessage = {
          id: 3,
          sender: "you",
          time: "00:00",
          text: state.newMessageText,
        };
        state.messages.push(newMessage);        
        state.newMessageText = '';
      };
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state
  }
}
export let sendMessageActionCreator = () => (
  {type: SEND_MESSAGE}
);
export let updateNewMessageTextActionCreator = messageText => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText,
  }
);

export default messagesReducer;