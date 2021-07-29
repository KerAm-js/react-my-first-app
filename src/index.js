import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, sendMessage, updateNewPostText, subscriber } from './Redux/State';
import state from './Redux/State';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        appState={state} 
        addPost={ addPost }
        sendMessage={ sendMessage }
        updateNewPostText={ updateNewPostText }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
rerenderEntireTree(state);
subscriber(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
