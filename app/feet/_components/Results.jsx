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
    'Легка, впевнена хода без болю та напруги.',
    'Здорові, активні стопи – твої справжні союзники.',
    'Покращення постави та рівноваги.',
    'Відновлення внутрішньої опори та відчуття стабільності у житті.',
    "Глибоке розуміння зв'язку «тіло-емоції-життя» через роботу зі стопами.",
    'Ефективні техніки, які залишаються з тобою назавжди.',
  ];

  return (
    <section className={`${styles.section} ${styles.resultsSection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Результати після практикуму</h2>
        <div className={styles.imageWrapper}>
          <Image src={slide_7} alt="Результати після практикуму" width={480} height={320} />
        </div>
        <div className={styles.list}>
          {outcomes.map((outcome, index) => (
            <div key={index} className={styles.listItem}>
              {outcome}
            </div>
          ))}
        </div>
        <div className={styles.card}>
          <h3 className={styles.subtitle}>
            Зроби крок до своїх здорових стоп та внутрішньої опори
          </h3>
          <p className={styles.text}>Обирай пакет та приєднуйся до практикуму</p>
          <a href="#packages" className={styles.button}>
            📲 Натискай та реєструйся!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
