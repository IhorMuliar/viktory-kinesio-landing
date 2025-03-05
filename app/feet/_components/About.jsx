// app/_components/About.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';
import slide_4 from '@/public/images/feet/slide_4.jpg';

/**
 * About component - Introduces the course instructor
 * @returns {JSX.Element} The About component
 */
const About = () => {
  return (
    <section className={`${styles.section} ${styles.aboutSection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Хто веде практикум?</h2>
        <div className={styles.imageWrapper}>
          <Image src={slide_4} alt="Вікторія - ваш інструктор" width={480} height={320} />
        </div>
        <div className={styles.card}>
          <p className={styles.text}>Привіт! Я Вікторія.</p>
          <p className={styles.text}>
            Фізичний терапевт, кінезіолог, остеопат, енергопрактик та психосоматолог
          </p>
          <p className={styles.text}>
            Авторка унікальної методики роботи зі стопами через тіло, психосоматику та нейронні
            зв'язки.
          </p>
          <p className={styles.text}>
            Стопи – це твоя основа та опора у прямому та переносному сенсі. Я допоможу тобі їх
            відновити.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
