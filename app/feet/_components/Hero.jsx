// app/_components/Hero.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';

/**
 * Hero component - The main landing section of the course page
 * @returns {JSX.Element} The Hero component
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/feet/slide_1.jpg"
          alt="Background"
          fill
          priority
          className={styles.heroBackgroundImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>
              СТОПИ -<br /> ТВОЯ ОПОРА
            </h1>
            <div className={styles.heroStrategy}>
              <span>
                Практикум для тих, хто хоче повернути легкість ходи, здоров'я стоп та внутрішню
                опору в житті!
              </span>
            </div>
          </div>
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <div className={styles.featureContent}>
                Ти отримаєш доступ до матеріалів відразу після оплати.
              </div>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureContent}>Чат та підтримка від мене.</div>
            </div>
          </div>
          <div className={styles.heroAction}>
            <a className={styles.heroButton} href="#packages">
              <span className={styles.buttonText}>Обрати пакет участі</span>
              <div className={styles.buttonTextIcon}>
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
