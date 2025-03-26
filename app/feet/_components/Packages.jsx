// app/_components/Packages.jsx

import Link from 'next/link';
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
      features: [
        '<b>Доступ</b> до всіх матеріалів практикуму на <b>1 місяць</b> (відео, вправи, чек-листи)',
      ],
      isPopular: false,
      link: 'https://secure.wayforpay.com/payment/sdb7c8c0c786f',
    },
    {
      name: 'Silver',
      price: '1200 грн',
      features: [
        'Матеріали з <b>доступом 3 місяці</b>',
        'Участь у закритому чаті та ефірах з відповідями на запитання',
        'Доступ 3 місяці',
      ],
      isPopular: true,
      link: 'https://secure.wayforpay.com/payment/s39b97605264a',
    },
    {
      name: 'Gold',
      price: '2300 грн',
      features: [
        'Все з пакету Silver з <b>доступом 6 місяців</b>',
        '<b>Індивідуальний підбір технік</b> та вправ саме для тебе',
      ],
      isPopular: false,
      link: 'https://secure.wayforpay.com/payment/s3aebfbff8259',
    },
    {
      name: 'Diamond',
      price: '4500 грн',
      features: [
        'Все з пакету Gold з <b>доступом на 1 рік</b>',
        '<b>1 індивідуальна сесія</b> зі мною для глибокої роботи зі стопами та твоїм запитом',
      ],
      isPopular: false,
      link: 'https://secure.wayforpay.com/payment/s41cb240fb2b5',
    },
  ];

  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        <h2 className={styles.title}>Пакети участі</h2>
        <p style={{ textAlign: 'center', fontWeight: '700' }}>
          Вибери свій рівень турботи про себе та свою опору.
        </p>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`${styles.packageCard} ${pkg.isPopular ? styles.packageCardPopular : ''}`}
            >
              {pkg.isPopular && <div className={styles.popularBadge}>Найпопулярніший</div>}
              <div className={styles.packageContent}>
                <div className={styles.packageHeader}>
                  <h3 className={styles.packageTitle}>{pkg.name}</h3>
                  <div className={styles.packagePrice}>
                    <span className={styles.price}>{pkg.price}</span>
                  </div>
                </div>
                <ul className={styles.packageFeatures}>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.packageFeature}>
                      <svg
                        className={styles.featureIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                    </li>
                  ))}
                </ul>
                <Link className={styles.packageButton} href={pkg.link} target="_blank">
                  <div className={styles.buttonText}>
                    Обрати пакет
                  </div>
                  <span className={styles.buttonTextIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
