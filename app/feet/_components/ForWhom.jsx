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
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: 'Має <b>плоскостопість</b>, вальгус чи «кісточку» на нозі.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: 'Відчуває <b>дискомфорт при ході</b> або не може підібрати зручне взуття.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: 'Часто або відчуває та <b>проблеми з рівновагою</b>.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: 'Має <b>відчуття «відсутності опори»</b> у житті – ніби земля йде з-під ніг.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: "Цікавиться психосоматикою та <b>зв'язком тіла й емоцій</b>.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      text: 'Хоче покращити якість життя через роботу зі стопами та тілом.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Для кого цей практикум?</h2>
        <div className={styles.imageWrapper}>
          <Image src={slide_2} alt="Для кого цей практикум" width={480} height={320} />
        </div>
        <div className={styles.forWhomGrid}>
          {targetAudience.map((item, index) => (
            <div key={index} className={styles.forWhomCard}>
              <div className={styles.forWhomIcon}>{item.icon}</div>
              <div
                className={styles.forWhomText}
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
