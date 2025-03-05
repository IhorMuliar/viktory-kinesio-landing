// app/_components/Results.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';
import slide_7 from '@/public/images/feet/slide_7.jpg';

/**
 * Results component - Displays the expected outcomes and benefits of completing the course
 * @returns {JSX.Element} The Results component
 */
const Results = () => {
  const outcomes = [
    {
      number: '01',
      text: 'Легка, впевнена хода без болю та напруги.',
    },
    {
      number: '02',
      text: 'Здорові, активні стопи – твої справжні союзники.',
    },
    {
      number: '03',
      text: 'Покращення постави та рівноваги.',
    },
    {
      number: '04',
      text: 'Відновлення внутрішньої опори та відчуття стабільності у житті.',
    },
    {
      number: '05',
      text: "Глибоке розуміння зв'язку «тіло-емоції-життя» через роботу зі стопами.",
    },
    {
      number: '06',
      text: 'Ефективні техніки, які залишаються з тобою назавжди.',
    },
  ];

  return (
    <section className={`${styles.section} ${styles.resultsSection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Результати після практикуму</h2>
        <div className={styles.imageWrapper}>
          <Image src={slide_7} alt="Результати після практикуму" width={480} height={320} />
        </div>
        <div className={styles.resultsList}>
          {outcomes.map((outcome, index) => (
            <div key={index} className={styles.resultItem}>
              <div className={styles.resultNumber}>{outcome.number}</div>
              <div className={styles.resultText}>{outcome.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.card}>
          <h3 className={styles.subtitle}>
            Зроби крок до своїх здорових стоп та внутрішньої опори
          </h3>
          <p className={styles.text}>Обирай пакет та приєднуйся до практикуму</p>
          <a href="#packages" className={styles.button}>
            Натискай та реєструйся!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
