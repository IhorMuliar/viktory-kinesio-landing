'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import icon from '@/public/images/test-icon.svg';
import { services } from './constants.js';

import styles from './Services.module.css';

const Services = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [output, setOutput] = useState('-88%');

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 901 && window.innerWidth < 1400) {
        setOutput('-100%');
      } else if (window.innerWidth > 768 && window.innerWidth < 900) {
        setOutput('-114%');
      } else if (window.innerWidth <= 768) {
        setOutput('-114%');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ['1%', output]);
  const xBar = useTransform(scrollYProgress, [0, 1], [output, '1%']);

  useEffect(() => {
    const currentRef = targetRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasAnimated(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className={styles.services} id="services" ref={targetRef}>
      <div className={styles.wrapper}>
        <motion.h2
          initial={{ opacity: 0, translateY: '100%' }}
          animate={hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }}
          transition={{ duration: 0.4 }}
        >
          <span>Терапевтичні</span> послуги
        </motion.h2>
      </div>
      <div className={styles.container}>
        <motion.ul style={{ x }}>
          {services.map((service, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <Image src={icon} alt="service icon" width={22} height={18} />
              </div>
              <h3 className="bold-m">{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </motion.ul>
        <div className={styles.progress}>
          <motion.div style={{ x: xBar }} className={styles.bar} />
        </div>
      </div>
    </section>
  );
};

export default Services;
