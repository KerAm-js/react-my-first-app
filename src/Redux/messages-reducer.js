const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  newMessageText: '',
  messages: [
    {id: 1, sender : "user", time : "21:13", text : "Hi"},
    {id: 2, sender : "user", time : "21:13", text : "How are you?"},
  ],
  users: [
    {id: 1, lastMessage: "last m", username: "Chad", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 2, lastMessage: "last m", username: "Nick", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 3, lastMessage: "last m", username: "Eric", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 4, lastMessage: "last m", username: "Lana", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 5, lastMessage: "last m", username: "Bob", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 6, lastMessage: "last m", username: "Meggy", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 7, lastMessage: "last m", username: "Sally", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
    {id: 8, lastMessage: "last m", username: "Chris", ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  ],
};

const messagesReducer = (state = initialState, action) => {
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
    default:
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