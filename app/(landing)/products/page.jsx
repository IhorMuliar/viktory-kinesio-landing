import Image from 'next/image';
import Link from 'next/link';

import horizontal_portrait from '@/public/images/horizontal-portrait.jpg';
import styles from './products.module.css';

const Products = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.title} ${styles.wrapper}`}>
          <h1>
            Мої <span>продукти</span>
          </h1>
        </div>
        <div className={styles.intro}>
          <Image src={horizontal_portrait} alt="Test image" />
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.filters}>
          <div className={styles.filter}>Всі</div>
          <div className={styles.filter}>Майстер-класи</div>
          <div className={styles.filter}>Курси</div>
          <div className={styles.filter}>Пости</div>
        </div>
        <div className={styles.list}>
          <div className={styles.product}>
            <Image src={horizontal_portrait} alt="Test image" />
            <div className={styles.text_container}>
              <Link href="/products/1">
                <h2>Як правильно ступати на ногу?</h2>
              </Link>
              <p>14.10.24 / Навчальний</p>
            </div>
            <Link href="/" className="link">
              Детальніше
            </Link>
          </div>
          <div className={styles.product}>
            <Image src={horizontal_portrait} alt="Test image" />
            <div className={styles.text_container}>
              <Link href="/products/2">
                <h2>Як правильно ступати на ногу?</h2>
              </Link>
              <p>14.10.24 / Навчальний</p>
            </div>
            <Link href="/products/2" className="link">
              Детальніше
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
