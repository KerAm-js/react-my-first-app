import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.title}>
        <h2>Menu</h2>
      </div>
      <div className={s.items}>
        <div className={`${s.item}`}>
          <a className={s.link} href="/profile">Profile</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="/messages">Messages</a>
        </div>                 
        <div className={s.item}>
          <a className={s.link} href="/news">News</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="/liked">Liked</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;