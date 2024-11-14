import Image from 'next/image';

import horizontal_portrait from '@/public/images/horizontal-portrait.jpg';
import styles from './product-details.module.css';

const ProductDetails = async ({ params }) => {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.title} ${styles.wrapper}`}>
          <h1>{params.slug}</h1>
        </div>
        <div className={styles.intro}>
          <Image src={horizontal_portrait} alt="Test image" />
        </div>
      </section>
      <section className={styles.details}>
        some text some text some text some text some text some text
      </section>
    </>
  );
};

export default ProductDetails;
