'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import logo_white from '@/public/images/logo-white.png';
import { NAV_LINKS } from './constants.js';

import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? 'scroll' : 'hidden';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1110) {
        setMenuOpen(false);
        document.body.style.overflow = 'scroll';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ translateY: '-100%' }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navigation_links}>
            {NAV_LINKS.slice(0, 3).map((link) => (
              <li key={link.href}>
                <a className="link regular-s reversed" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/" className={`link ${styles.logo}`}>
            <Image
              src={logo_white}
              alt="logo"
              quality={100}
              sizes="(max-width: 768px) 100px, 140px"
            />
          </Link>
          <button
            className={`${styles.button} ${styles.burger} primary size-m ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={styles.navigation_links}>
            {NAV_LINKS.slice(3).map((link) => (
              <li key={link.href}>
                <Link className="link regular-s reversed" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.menu_container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.ul
              initial={{ translateY: '3%' }}
              animate={{ translateY: 0 }}
              exit={{ translateY: '2%' }}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link className="link regular-s" href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <motion.a
                target="_blank"
                href="https://t.me/ViktoryKinesio"
                className="button primary size-l"
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0 }}
                exit={{ translateY: '100%' }}
                transition={{ duration: 0.2 }}
              >
                Запис на косультацію
              </motion.a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
