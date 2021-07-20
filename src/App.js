import React from 'react';
import './App.css';
import Header from'./components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <main className="main">
        <Navbar/>
        <Profile/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
