// app/_components/Packages.jsx

import styles from '../styles/main.module.css';

/**
 * Packages component - Displays available course packages and their details
 * @returns {JSX.Element} The Packages component
 */
const Packages = () => {
  const packages = [
    {
      name: 'Стандарт',
      price: '800 грн',
      features: ['Доступ до всіх матеріалів практикуму на 1 місяць (відео, вправи, чек-листи)'],
    },
    {
      name: 'Silver',
      price: '1200 грн',
      features: [
        'Матеріали з доступом 3 місяці',
        'Участь у закритому чаті та ефірах з відповідями на запитання',
        'Доступ 3 місяці',
      ],
    },
    {
      name: 'Gold',
      price: '2300 грн',
      features: [
        'Все з пакету Silver з доступом 6 місяців',
        'Індивідуальний підбір технік та вправ саме для тебе',
      ],
    },
    {
      name: 'Diamond',
      price: '4500 грн',
      features: [
        'Все з пакету Gold з доступом на 1 рік',
        '1 індивідуальна сесія зі мною для глибокої роботи зі стопами та твоїм запитом',
      ],
    },
  ];

  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        <h2 className={styles.title}>Пакети участі</h2>
        <div className={styles.benefitsGrid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.packageCard}>
              <h3 className={styles.packageTitle}>{pkg.name}</h3>
              <p className={styles.packagePrice}>{pkg.price}</p>
              <ul className={styles.list}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.listItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
