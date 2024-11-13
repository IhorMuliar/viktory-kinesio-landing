'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import logo from '@/public/images/logo-white.png';
import Telegram from './Telegram.jsx';
import Youtube from './Youtube.jsx';
import Instagram from './Instagram.jsx';
import Facebook from './Facebook.jsx';

import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end start'],
  });
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const translateY4 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateY5 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <footer ref={footerRef} id="footer" className={styles.footer}>
      <div className={`${styles.footer_rectangles}`}>
        <motion.div
          className={`${styles.rectangle} ${styles.rectangle_1}`}
          style={{ translateY: translateY1 }}
        ></motion.div>
        <motion.div
          className={`${styles.rectangle} ${styles.rectangle_2}`}
          style={{ translateY: translateY2 }}
        ></motion.div>
        <motion.div
          className={`${styles.rectangle} ${styles.rectangle_3}`}
          style={{ translateY: translateY3 }}
        ></motion.div>
        <motion.div
          className={`${styles.rectangle} ${styles.rectangle_4}`}
          style={{ translateY: translateY4 }}
        ></motion.div>
        <motion.div
          className={`${styles.rectangle} ${styles.rectangle_5}`}
          style={{ translateY: translateY5 }}
        ></motion.div>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.outro}>
            <Link href="/" className={`link ${styles.logo}`}>
              <Image src={logo} alt="logo" width={200} />
            </Link>
            <p>Допоможу навести лад в середині Тебе, щоб все і ззовні стало на свої місця!</p>
            <div className={styles.socials}>
              <a
                className={`icon-link ${styles.telegram}`}
                href="https://t.me/ViktoryKinesio"
                target="_blank"
              >
                <Telegram />
              </a>
              <a
                className={`icon-link ${styles.youtube}`}
                href="https://www.youtube.com/@Viktory.kinesio"
                target="_blank"
              >
                <Youtube />
              </a>
              <a
                className={`icon-link ${styles.instagram}`}
                href="https://www.instagram.com/viktory.kinesio"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                className={`icon-link ${styles.facebook}`}
                href="https://www.facebook.com/ViktoryKinesio"
                target="_blank"
              >
                <Facebook />
              </a>
            </div>
          </div>
          {/*<ul className={styles.navigation_links}>*/}
          {/*  <li>*/}
          {/*    <a className="link regular-s reversed" href="#content">Про мене</a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a className="link regular-s reversed" href="#services">Спеціалізація</a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a className="link regular-s reversed" href="#process">Процес</a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a className="link regular-s reversed" href="#faq">Питання та відповіді</a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a className="link regular-s reversed" href="#testimonial">Відгуки</a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
          <div className={styles.location}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.4598472325671!2d30.54398460656596!3d50.42014432112399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6c96d00001%3A0x26aea51b084f03ca!2zTWFyaWkgUHJ5aW1hY2hlbmtvIEJsdmQsIDgsINC-0YTRltGBIDMsIEt5aXYsIDAxMDQy!5e0!3m2!1sen!2sua!4v1726950550558!5m2!1sen!2sua"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
            <p className={styles.address}>
              Метро Звіринецька, <br />
              бульвар Марії Приймаченко 8
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            Copyright <span>©</span> {currentYear} Viktory Kinesio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
