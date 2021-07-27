//Modules
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//My imports
import './App.css';
import Header from'./components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Main/Profile/Profile';
import Footer from './components/Footer/Footer';
import Messages from './components/Main/Messages/Messages';
import News from './components/Main/News/News';
import Liked from './components/Main/Liked/Liked';
import Settings from './components/Main/Settings/Settings';


const App = (props) => {
  const profile = () => (
    <Profile 
      state={props.appState.profilePage} 
      addPost={ props.addPost }
    />
  );
  const messages = () => (
    <Messages state={props.appState.messagesPage}/>
  );
  const news = () => <News />;
  const liked = () => <Liked />;
  const settings = () => <Settings />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <main className="main">
          <Navbar/>
          <div className="content">
            <Route path="/profile" render={profile}/>
            <Route path="/messages" render={messages}/>
            <Route path="/news" render={news}/>
            <Route path="/liked" render={liked}/>
            <Route path="/settings" render={settings}/>
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
