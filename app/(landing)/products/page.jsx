import Image from 'next/image';
import Link from 'next/link';

import horizontal_portrait from '@/public/images/horizontal-portrait.jpg';
import LinkButton from '@/app/(landing)/products/link-button';
import { playfairDisplay } from '@/app/fonts';

import styles from './products.module.css';

const Products = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.title} ${styles.wrapper}`}>
          <h1 className={playfairDisplay.className}>
            Мої <span>продукти</span>
          </h1>
        </div>
        <div className={styles.intro}>
          <Image src={horizontal_portrait} alt="Test image" />
        </div>
      </section>
      <section className={styles.products}>
        <ul className={styles.filters}>
          <li className={`${styles.filter} ${styles.active}`}>Всі</li>
          <li className={styles.filter}>Майстер-класи</li>
          <li className={styles.filter}>Курси</li>
          <li className={styles.filter}>Пости</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.product}>
            <div className={styles.image_wrapper}>
              <Image src={horizontal_portrait} alt="Test image" width={300} height={200} />
            </div>
            <div className={styles.text_container}>
              <Link href="/products/1">
                <h2 className={playfairDisplay.className}>Як правильно ступати на ногу?</h2>
              </Link>
              <p>14.10.24 / Навчальний</p>
            </div>
            <LinkButton href="/products/1" />
          </li>
          <li className={styles.product}>
            <div className={styles.image_wrapper}>
              <Image src={horizontal_portrait} alt="Test image" width={300} height={200} />
            </div>
            <div className={styles.text_container}>
              <Link href="/products/2">
                <h2 className={playfairDisplay.className}>Як правильно ступати на ногу?</h2>
              </Link>
              <p>14.10.24 / Навчальний</p>
            </div>
            <LinkButton href="/products/2" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Products;
