let state = {
  profilePage: {
    profileData: {
      ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
      nick: "Kerimov777",
      fullname: "Amir Kerimov",
      location: "Chechen Republic",
      interest: "Programming, mathematics, logistics, business",
    },
    myPosts: [
      {id: 1, text: "Hello, I use Lists", likeCount: 12},
      {id: 2, text: "How are you, users?", likeCount: 25},
      {id: 3, text: "This is a good application", likeCount: 40},
      {id: 4, text: "I like it", likeCount: 29},
    ],
  },
  messagesPage: {
    messages: [
      {id: 1, sender : "you", time : "21:13", text : "Hi"},
      {id: 2, sender : "you", time : "21:13", text : "How are you?"},
      {id: 3, sender : "user", time : "21:14", text : "Hello"},
      {id: 4, sender : "user", time : "21:14", text : "I'm fine, thanks"},
      {id: 5, sender : "user", time : "21:15", text : "And you?"},
      {id: 6, sender : "you", time : "21:15", text : "I'm ok"},
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
export default state;