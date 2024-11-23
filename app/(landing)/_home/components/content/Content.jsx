'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { playfairDisplay } from '@/app/fonts';
import { content } from './constants.js';

import styles from './Content.module.css';

const Content = () => {
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
    <section className={styles.content} id="content" ref={blockRef}>
      <motion.h2
        initial={{ opacity: 0, translateY: '100%' }}
        animate={hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }}
        transition={{ duration: 0.4 }}
        className={playfairDisplay.className}
      >
        <div className={styles.wrapper}>
          <span>Ліцензований терапевт</span> у Києві
        </div>
      </motion.h2>
      <div className={styles.articles}>
        {content.map((article, index) => (
          <div className={styles.article} key={index}>
            {index % 2 === 0 ? (
              <>
                <div className={`${styles.text_container} ${styles.right}`}>
                  <h3 className={playfairDisplay.className}>
                    {/*Я ніколи <span>не вважала</span> це своєю місією*/}
                    {article.title}
                  </h3>
                  <p>{article.description}</p>
                </div>
                <Image src={article.image} alt="test" />
              </>
            ) : (
              <>
                <Image src={article.image} alt="test" />
                <div className={`${styles.text_container} ${styles.left}`}>
                  <h3 className={playfairDisplay.className}>
                    {/*Я ніколи <span>не вважала</span> це своєю місією*/}
                    {article.title}
                  </h3>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: article.description }}></span>
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
