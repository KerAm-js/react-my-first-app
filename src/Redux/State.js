let rerenderEntireTree = () => {
  console.log('changed');
};

let state = {
  profilePage: {
    myPosts: [
      {id: 1, text: "Hello, I use Lists", likeCount: 12},
      {id: 2, text: "How are you, users?", likeCount: 25},
    ],
    newPostText: '',
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
}

export let addPost = () => {
  if (state.profilePage.newPostText) {
    let newPost = {
      id: 3,
      text: state.profilePage.newPostText,
      likeCount: 0,
    };
    state.profilePage.myPosts.push(newPost);
    rerenderEntireTree(state);
    updateNewPostText('');
  };
};
export let sendMessage = (message) => {
  if (message) {
    let newMessage = {
      id: 3,
      sender: "you",
      time: "00:00",
      text: message,
    };
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
  }; 
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export let subscriber = (observer) => {
  rerenderEntireTree = observer;
};

export default state;