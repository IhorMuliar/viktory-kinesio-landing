// app/_components/Benefits.jsx

'use client';

import { useState } from 'react';
import styles from '../styles/main.module.css';

/**
 * Benefits component - Displays the benefits of having healthy feet
 * @returns {JSX.Element} The Benefits component
 */
const Benefits = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const benefits = [
    {
      title: 'Хребта',
      description:
        'Здорова робота стоп допомагає підтримувати правильне положення хребта та зменшує напругу в спині.',
    },
    {
      title: "Суглобів та м'язів",
      description:
        'Сильні стопи рівномірно розподіляють навантаження, знижуючи ризик болю та травм y колінах, тазі та спині.',
    },
    {
      title: 'Кровообігу',
      description:
        'Вправи для стоп покращують кровообіг, запобігаючи застоям, набрякам та целюліту.',
    },
    {
      title: 'Судин та нервової системи',
      description: 'Це сприяє вільному диханню та стабілізації тиску.',
    },
    {
      title: 'Тазового дна та здоровʼя репродуктивної системи',
      description:
        'Стабільна опора та баланс стоп є надійною опорою для тазового регіону, його здорової рухливості, що дарує здорове середовище для функціонування урогенітальної зони.',
    },
    {
      title: 'Прояв та реалізації в житті',
      description:
        "Стопи мають багато рефлекторних зон та точок, енергетичних центрів. При блоці та виконанні мʼязів стопи, ці точки та канали не можуть бути активними. Здоров'я стоп це пряма запорука твоєї активної реалізації.",
    },
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Від стану стоп залежить гармонійна робота:</h2>
        <div className={styles.benefitsAccordion}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitAccordionCard}>
              <div
                className={styles.benefitHeader}
                onClick={() => handleClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleClick(index);
                  }
                }}
              >
                <h3 className={styles.benefitHeaderTitle}>{benefit.title}</h3>
                <svg
                  className={`${styles.benefitIcon} ${expandedIndex === index ? styles.expanded : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              {expandedIndex === index && (
                <div className={styles.benefitContent}>{benefit.description}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.benefitsFooter}>
          <p className={styles.benefitsFooterText}>
            <b>Стопи</b> — це фундамент всього тіла. 26 кісток, 33 суглоби, більше сотні м'язів,
            зв'язок і зв'язок і сухожиль — все це щодня тримає нашу вагу, адаптується до взуття,
            підлоги, бігових доріжок.
          </p>
          <p className={styles.benefitsFooterText}>
            <b>І кожна дрібна помилка</b> — тісне взуття, неправильна постановка стопи, відсутність
            регулярної гімнастики — створює ланцюг проблем, які проявляються не тільки в ногах, а й
            у всьому тілі.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
