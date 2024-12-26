'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import horizontal_portrait from '@/public/images/horizontal-portrait.jpg';
import LinkButton from '@/app/(landing)/products/link-button';
import { client } from '@/sanity/lib/client';
import { playfairDisplay } from '@/app/fonts';

import styles from './products.module.css';

async function fetchCategories() {
  const query = `
    *[_type == "productCategory"] | order(title asc) {
      title,
      slug,
    }
  `;

  return client.fetch(query);
}

export async function fetchProducts(categorySlug) {
  const query = `
    *[_type == "product" ${categorySlug ? `&& "${categorySlug}" in categories[]->slug.current]` : ']'} | order(releaseDate desc) {
      title,
      releaseDate,
      categories[] -> {
        title,
        slug
      },
      slug,
      preview {
        asset -> {
          _id,
          url
        }
      }
    }
  `;

  return client.fetch(query);
}

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);

      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    initializeData();
  }, []);

  const handleCategoryClick = async (categorySlug) => {
    setActiveCategory(categorySlug);
    const fetchedProducts = await fetchProducts(categorySlug);
    setProducts(fetchedProducts);
  };

  const formatCategories = (categories) => {
    if (!categories || categories.length === 0) {
      return '';
    }
    return `/ ${categories.map((category) => category.title).join(', ')}`;
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.title} ${styles.wrapper}`}>
          <h1 className={playfairDisplay.className}>
            Моя <span>скарбничка технік</span>
          </h1>
        </div>
        <div className={styles.intro}>
          <Image src={horizontal_portrait} alt="Test image" />
        </div>
      </section>
      <section className={styles.products}>
        <ul className={styles.filters}>
          <li
            className={`${styles.filter} ${!activeCategory ? styles.active : ''}`}
            onClick={() => handleCategoryClick(null)}
          >
            Всі
          </li>
          {categories.map((category) => (
            <li
              className={`${styles.filter} ${
                activeCategory === category.slug.current ? styles.active : ''
              }`}
              key={category.slug.current}
              onClick={() => handleCategoryClick(category.slug.current)}
            >
              {category.title}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {products.map((product) => (
            <li className={styles.product} key={product.slug.current}>
              <div className={styles.image_wrapper}>
                <Image src={product.preview.asset.url} alt="Test image" width={300} height={200} />
              </div>
              <div className={styles.text_container}>
                <Link href={`/products/${product.slug.current}`}>
                  <h2 className={playfairDisplay.className}>{product.title}</h2>
                </Link>
                <p>
                  {product.releaseDate} {formatCategories(product.categories)}
                </p>
              </div>
              <LinkButton href={`/products/${product.slug.current}`} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Products;
