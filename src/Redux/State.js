const ADD_POST = "ADD-NEW-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export let store = {
  _state: {
    profilePage: {
      newPostText: '',
      myPosts: [
        {id: 1, text: "Hello, I use Lists", likeCount: 12},
        {id: 2, text: "How are you, users?", likeCount: 25},
      ],
      profileData: {
        ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
        nick: "Kerimov777",
        fullname: "Amir Kerimov",
        location: "Chechen Republic",
        interest: "Programming, mathematics, logistics, business",
        postsCount: 4,
        friendsCount: 4,
        interestsCount: 10,
      },
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {
    console.log('changed');
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText) {
        let newPostText = this._state.profilePage.newPostText;
        let newPost = {
          id: 3,
          text: newPostText,
          likeCount: 0,
        };
        this._state.profilePage.myPosts.push(newPost);
        this._callSubscriber();
        this._state.profilePage.newPostText = '';
      };
    } else if (action.type === SEND_MESSAGE){
      if (this._state.messagesPage.newMessageText) {
        let newMessage = {
          id: 3,
          sender: "you",
          time: "00:00",
          text: this._state.messagesPage.newMessageText,
        };
        this._state.messagesPage.messages.push(newMessage);
        this._callSubscriber();
        this._state.messagesPage.newMessageText = '';
      }; 
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.postText;
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.messageText;
      this._callSubscriber();
    };
  },
};

window.store = store;

export let addPostActionCreator = () => (
  {type: ADD_POST}
);
export let sendMessageActionCreator = () => (
  {type: SEND_MESSAGE}
);
export let updateNewPostTextActionCreator = postText => (
  {
    type: UPDATE_NEW_POST_TEXT,
    postText: postText,
  }
);
export let updateNewMessageTextActionCreator = messageText => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText,
  }
);
export default store;
