import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.author}>
        <a className={s.link} href="#">Amir Kerimov</a>
      </div>
    </footer>
  );
};

export default Footer;