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
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <main className="main">
          <Navbar/>
          <div className="content">
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/news" component={News}/>
            <Route path="/liked" component={Liked}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
