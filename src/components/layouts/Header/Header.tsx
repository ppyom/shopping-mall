import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  NavLinkRenderProps,
  useLocation,
} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const setActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? styles.active : '';
  };

  const menuClose = () => setMenuOpen(false);
  const handleMenuClose = ({ target }: WindowEventMap['resize']) => {
    if (target instanceof window) {
      target.innerWidth > 800 && menuClose();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleMenuClose);
    return () => window.removeEventListener('resize', handleMenuClose);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [menuOpen]);
  useEffect(() => {
    menuClose();
  }, [pathname]);

  return (
    <header className={`${styles.header} mw`}>
      <Link to="/">
        <h1 hidden>Shop</h1>
        <img className={styles.logo} src="/images/logo.svg" alt="로고" />
      </Link>
      <nav className={`${menuOpen ? styles.on : ''}`}>
        <div className={styles.gnb}>
          <NavLink to="product" className={setActiveLink}>
            Product
          </NavLink>
          <NavLink to="blog" className={setActiveLink}>
            Blog
          </NavLink>
          <NavLink to="our" className={setActiveLink}>
            Our Story
          </NavLink>
        </div>
        <div>
          <NavLink to="search" className={setActiveLink}>
            <i className="fa-solid fa-magnifying-glass" />
          </NavLink>
          <NavLink to="cart" className={setActiveLink}>
            <i className="fa-solid fa-cart-shopping" />
          </NavLink>
          <NavLink to="mypage" className={setActiveLink}>
            <i className="fa-solid fa-user" />
          </NavLink>
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
