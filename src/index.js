import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        store={ store }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
console.log(store.subscriber);
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
