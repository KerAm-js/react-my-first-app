//Modules
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

//My imports
import style from './App.module.scss';
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
      profilePage={ props.store.getState().profilePage }
      store={ props.store }
    />
  );
  const messages = () => (
    <Messages 
      messagesPage={ props.store.getState().messagesPage }
      store={ props.store }
    />
  );
  const news = () => <News />;
  const liked = () => <Liked />;
  const settings = () => <Settings />;

  return (
    <BrowserRouter>
      <div className={ style["app-wrapper"] }>
        <Header/>
        <main className={ style["main"] }>
          <Navbar/>
          <div className={ style["content"] }>
            <Route path="/profile" render={ profile }/>
            <Route path="/messages" render={ messages }/>
            <Route path="/news" render={ news }/>
            <Route path="/liked" render={ liked }/>
            <Route path="/settings" render={ settings }/>
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
