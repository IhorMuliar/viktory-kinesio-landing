// app/_components/Header.jsx

import styles from '../styles/main.module.css';

/**
 * Header component - Displays the site logo and navigation links
 * @returns {JSX.Element} The Header component
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>Viktory Kinesio</div>
          <nav className={styles.nav}>
            <a href="#whatyouget" className={styles.navLink}>
              Що ти отримаєш
            </a>
            <a href="#packages" className={styles.navLink}>
              Купити курс
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
