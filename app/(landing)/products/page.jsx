import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

import horizontal_portrait from '@/public/images/horizontal-portrait.jpg';
import LinkButton from '@/app/(landing)/products/link-button';
import { playfairDisplay } from '@/app/fonts';

import styles from './products.module.css';

export const revalidate = 0;

export async function fetchCategories() {
  const query = `
    *[_type == "productCategory"] | order(title asc) {
      title,
      slug,
    }
  `;

  return client.fetch(query);
}

const Products = async () => {
  const categories = await fetchCategories();

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
          {categories.map((category) => (
            <li className={styles.filter} key={category.slug}>
              {category.title}
            </li>
          ))}
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
