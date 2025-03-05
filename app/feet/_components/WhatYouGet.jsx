// app/_components/WhatYouGet.jsx

import styles from '../styles/main.module.css';

/**
 * WhatYouGet component - Lists the benefits and materials participants receive
 * @returns {JSX.Element} The WhatYouGet component
 */
const WhatYouGet = () => {
  const benefits = [
    {
      title: 'Діагностику стану твоїх стоп',
      description: "дізнаєшся, як зараз працюють м'язи, зв'язки та суглоби.",
    },
    {
      title: 'Техніки для роботи з кісточкою',
      description: "а також вправи для роботи з зв'язками та підйомом стопи.",
    },
    {
      title: 'Спеціальні вправи',
      description: 'для відновлення правильної ходи та здорового навантаження.',
    },
    {
      title: 'Практику відновлення',
      description: "зв'язку стопа-мозок – це поверне тобі відчуття стабільності.",
    },
    {
      title: 'Глибинну роботу',
      description:
        'з емоціями та психосоматикою стоп – зрозумієш, що стопи розповідають про твоє життя.',
    },
    {
      title: "Бонус: зв'язок стоп",
      description: 'зубів та внутрішніх органів – розберемо, як це впливає на твої плани та дії.',
    },
  ];

  return (
    <section className={styles.section} id="whatyouget">
      <div className={styles.container}>
        <h2 className={styles.title}>Що ти отримаєш на практикумі?</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitText}>{benefit.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.text} style={{ textAlign: 'center' }}>
          Це не тільки робота зі стопами – це повернення собі внутрішньої опори у всіх сферах життя!
        </p>
      </div>
    </section>
  );
};

export default WhatYouGet;
