import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
  {id: 1, sender : "you", time : "21:13", text : "Hi"},
  {id: 2, sender : "you", time : "21:13", text : "How are you?"},
  {id: 3, sender : "user", time : "21:14", text : "Hello"},
  {id: 4, sender : "user", time : "21:14", text : "I'm fine, thanks"},
  {id: 5, sender : "user", time : "21:15", text : "And you?"},
  {id: 6, sender : "you", time : "21:15", text : "I'm ok"},
 ];

 let users = [
  {id: 1, lastMessage: "last m", username: "Chad", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 2, lastMessage: "last m", username: "Nick", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 3, lastMessage: "last m", username: "Eric", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 4, lastMessage: "last m", username: "Lana", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 5, lastMessage: "last m", username: "Bob", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 6, lastMessage: "last m", username: "Meggy", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 7, lastMessage: "last m", username: "Sally", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
  {id: 8, lastMessage: "last m", username: "Chris", avaLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"},
];

let myPosts = [
  {id: 1, text: "Hello, I use Lists", likeCount: 12},
  {id: 2, text: "How are you, users?", likeCount: 25},
  {id: 3, text: "This is a good application", likeCount: 40},
  {id: 4, text: "I like it", likeCount: 29},
];

let profileData = {
  ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
  nick: "Kerimov777",
  fullname: "Amir Kerimov",
  location: "Chechen Republic",
  interest: "Programming, mathematics, logistics, business",
}

ReactDOM.render(
  <React.StrictMode>
    <App 
      profileData={profileData}
      myPosts={myPosts}
      users={users}
      messages={messages} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
