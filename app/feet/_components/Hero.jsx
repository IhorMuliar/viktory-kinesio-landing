// app/_components/Hero.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';
import slide_1 from '@/public/images/feet/slide_1.jpg';

/**
 * Hero component - The main landing section of the feet course page
 * @returns {JSX.Element} The Hero component
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>СТОПИ – ТВОЯ ОПОРА</h1>
          <p className={styles.heroSubtitle}>
            Практикум для тих, хто хоче повернути легкість ходи, здоров'я стоп та внутрішню опору в
            житті!
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src={slide_1}
              alt="Здорові стопи - ваша опора"
              width={480}
              height={320}
              priority
            />
          </div>
          <p className={styles.text}>Ти отримаєш доступ до матеріалів відразу після оплати</p>
          <p className={styles.text}>Чат та підтримка від мене</p>
          <a href="#packages" className={styles.button}>
            Обрати пакет участі
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
