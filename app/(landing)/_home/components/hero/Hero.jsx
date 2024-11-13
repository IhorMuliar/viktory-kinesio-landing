'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Hero.module.css';

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const currentBlock = blockRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasAnimated(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (currentBlock) {
      observer.observe(currentBlock);
    }

    return () => {
      if (currentBlock) {
        observer.unobserve(currentBlock);
      }
    };
  }, []);

  return (
    <section className={styles.hero} ref={blockRef}>
      <div className={`${styles.title} ${styles.wrapper}`}>
        <motion.h1
          initial={{ opacity: 0, translateY: '100%' }}
          animate={hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }}
          transition={{ duration: 0.6 }}
        >
          <span>Привіт</span>, я Вікторія.
        </motion.h1>
      </div>
      <div className={styles.intro}>
        <video
          src="/images/hero-cover.mov"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
        />
        {/*<div className={styles.text_container}>*/}
        {/*  <div className={styles.wrapper}>*/}
        {/*    <motion.p*/}
        {/*      initial={{ opacity: 0, translateY: '100%' }}*/}
        {/*      animate={*/}
        {/*        hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }*/}
        {/*      }*/}
        {/*      transition={{ duration: 1 }}*/}
        {/*    >*/}
        {/*      Фізичний терапевт за базовою вищою освітою. Та за 20 років своєї практики, я постійно*/}
        {/*      додаю нові ключики в скарбничку.*/}
        {/*    </motion.p>*/}
        {/*  </div>*/}
        {/*  <div className={styles.wrapper}>*/}
        {/*    <motion.p*/}
        {/*      className={styles.speciality}*/}
        {/*      initial={{ opacity: 0, translateY: '100%' }}*/}
        {/*      animate={*/}
        {/*        hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }*/}
        {/*      }*/}
        {/*      transition={{ duration: 0.8 }}*/}
        {/*    >*/}
        {/*      Кінезіотерапія, прикладна кінезіологія, енергокінезіологія, психокінезіолонія,*/}
        {/*      інтегративна кінезіологія, китайська медицина, остеопатія, цілительсво, тонкопланові*/}
        {/*      техніки та дар від народження.*/}
        {/*    </motion.p>*/}
        {/*  </div>*/}
        {/*  <div className={styles.wrapper}>*/}
        {/*    <motion.p*/}
        {/*      initial={{ opacity: 0, translateY: '200%' }}*/}
        {/*      animate={*/}
        {/*        hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '200%' }*/}
        {/*      }*/}
        {/*      transition={{ duration: 0.8 }}*/}
        {/*    >*/}
        {/*      Все це поєдную та використовую індивідуально до особливостей та потреб Клієнта. Тому*/}
        {/*      не можливо наперед сказати як це. Можу обіцяти лише одне: Це буде цікаво, з посмішкою*/}
        {/*      та бережністю до Тебе. Адже Я знаю як Твоє тіло запитати що є причиною скарг, та як*/}
        {/*      перекласти його відповідь зрозуміло Твоєму мозку Тому приходь та знайомся із собою та*/}
        {/*      своїм тілом.*/}
        {/*    </motion.p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      {/*<motion.a*/}
      {/*  target="_blank"*/}
      {/*  href="https://t.me/ViktoryKinesio"*/}
      {/*  className={`button circle size-l`}*/}
      {/*  initial={{ opacity: 0, translateY: '100%' }}*/}
      {/*  animate={hasAnimated ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: '100%' }}*/}
      {/*  transition={{ duration: 0.5 }}*/}
      {/*  // initial={{scale: 0}}*/}
      {/*  // animate={hasAnimated ? {scale: 1} : {scale: 0}}*/}
      {/*  // transition={{duration: 0.5}}*/}
      {/*>*/}
      {/*  <div className="background"></div>*/}
      {/*  <span className="text">Запис на косультацію</span>*/}
      {/*</motion.a>*/}
    </section>
  );
};

export default Hero;
