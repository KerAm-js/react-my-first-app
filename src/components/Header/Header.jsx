import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.logo} src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"/>    
        <h1>UNO</h1>
    </header>
  );
};

export default Header;
