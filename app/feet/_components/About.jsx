// app/_components/About.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';
import slide_4 from '@/public/images/feet/slide_4.jpg';

/**
 * About component - Introduces the course instructor
 * @returns {JSX.Element} The About component
 */
const About = () => {
  const qualifications = [
    'Фізичний терапевт',
    'Кінезіолог',
    'Остеопат',
    'Енергопрактик',
    'Психосоматолог',
  ];

  return (
    <section className={`${styles.section} ${styles.aboutSection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Хто веде практикум?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImageContainer}>
                <Image
                  src={slide_4}
                  alt="Вікторія - ваш інструктор"
                  className={styles.aboutImage}
                  width={480}
                  height={320}
                />
              </div>
              <div className={styles.aboutDecorator}></div>
            </div>
            <div className={styles.aboutGreeting}>
              <h3 className={styles.aboutName}>Привіт! Я Вікторія</h3>
              <div className={styles.qualificationsList}>
                {qualifications.map((qualification, index) => (
                  <span key={index} className={styles.qualificationTag}>
                    {qualification}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.aboutDescription}>
              <p className={styles.aboutText}>
                Авторка унікальної методики роботи зі стопами через тіло, психосоматику та нейронні
                зв'язки.
              </p>
              <p className={styles.aboutText}>
                <span className={styles.highlight}>Стопи – це твоя основа та опора</span> у прямому
                та переносному сенсі. Я допоможу тобі їх відновити.
              </p>
            </div>
            <div className={styles.aboutExperience}>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>7+</span>
                <span className={styles.experienceText}>років досвіду</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>500+</span>
                <span className={styles.experienceText}>задоволених клієнтів</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceNumber}>5</span>
                <span className={styles.experienceText}>професійних сертифікацій</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
