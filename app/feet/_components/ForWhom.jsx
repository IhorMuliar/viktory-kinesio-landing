// app/_components/ForWhom.jsx

import Image from 'next/image';
import styles from '../styles/main.module.css';
import slide_2 from '@/public/images/feet/slide_2.jpg';

/**
 * ForWhom component - Describes the target audience for the course
 * @returns {JSX.Element} The ForWhom component
 */
const ForWhom = () => {
  const targetAudience = [
    'Має плоскостопість, вальгус чи «кісточку» на нозі.',
    'Відчуває дискомфорт при ході або не може підібрати зручне взуття.',
    'Часто підвертає ногу або відчуває нестійкість та проблеми з рівновагою.',
    'Має відчуття «відсутності опори» у житті – ніби земля йде з-під ніг.',
    "Цікавиться психосоматикою та зв'язком тіла й емоцій.",
    'Хоче покращити якість життя через роботу зі стопами та тілом.',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Для кого цей практикум?</h2>
        <div className={styles.imageWrapper}>
          <Image src={slide_2} alt="Для кого цей практикум" width={480} height={320} />
        </div>
        <div className={styles.list}>
          {targetAudience.map((item, index) => (
            <div key={index} className={styles.listItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
