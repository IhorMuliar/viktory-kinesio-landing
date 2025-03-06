// /app/feet/_components/FloatingButton.jsx

'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/main.module.css';

/**
 * FloatingButton component - A button that appears when scrolling past the hero section
 * and scrolls to the packages section when clicked
 * @returns {JSX.Element} The FloatingButton component
 */
const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY >= heroBottom);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPackages = () => {
    const packagesSection = document.querySelector('#packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.floatingButton}
      onClick={scrollToPackages}
      aria-label="Перейти до пакетів"
    >
      <span className={styles.floatingButtonContent}>
        <span className={styles.floatingButtonText}>Обрати пакет</span>
        <span className={styles.floatingButtonIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default FloatingButton;
