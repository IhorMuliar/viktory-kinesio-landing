'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import Accordion from '@/components/Accordion/Accordion';
import { faq } from './constants.js';
import styles from './Faq.module.css';

const Faq = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasAnimated(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.faq} id="faq" ref={blockRef}>
      <div className={styles.text_container}>
        <div className={styles.wrapper}>
          <motion.h2
            initial={{ translateY: '120%' }}
            animate={hasAnimated ? { translateY: 0 } : { translateY: '120%' }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.wrapper}>
              <span>Питання</span> та
            </div>
            <div className={styles.wrapper}>
              <span>відповіді</span>
            </div>
          </motion.h2>
        </div>
        <div className={styles.wrapper}>
          <motion.p
            initial={{ opacity: 0, translateY: '300%' }}
            animate={
              hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '300%' }
            }
            transition={{ duration: 0.6 }}
          >
            Ось кілька типових запитань, які я отримую про свою терапію.
          </motion.p>
        </div>
      </div>
      <div className={styles.accordion_container}>
        <Accordion items={faq} />
      </div>
    </section>
  );
};

export default Faq;
