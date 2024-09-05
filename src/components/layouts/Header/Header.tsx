import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} mw`}>
      <a href="#">
        <h1 hidden>Shop</h1>
        <img className={styles.logo} src="/images/logo.svg" alt="로고" />
      </a>
      <nav className={`${menuOpen ? styles.on : ''}`}>
        <div className={styles.gnb}>
          <a href="#product">Product</a>
          <a href="#blog">Blog</a>
          <a href="#our">Our Story</a>
        </div>
        <div>
          <a href="#search">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a href="#cart">
            <i className="fa-solid fa-cart-shopping" />
          </a>
          <a href="#mypage">
            <i className="fa-solid fa-user" />
          </a>
        </div>
      </nav>
      <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="fa-solid fa-xmark" />
        ) : (
          <i className="fa-solid fa-bars" />
        )}
      </button>
    </header>
  );
};

export default Header;
