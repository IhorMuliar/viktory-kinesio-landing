import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { playfairDisplay } from '@/app/fonts';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import styles from './product-details.module.css';
import Telegram from '@/components/Footer/Telegram';
import Youtube from '@/components/Footer/Youtube';
import Instagram from '@/components/Footer/Instagram';
import Facebook from '@/components/Footer/Facebook';

export const revalidate = 0;

async function fetchProduct(slug) {
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      releaseDate,
      description,
      content,
      slug,
      videoLink,
      paymentLink,
      preview {
        asset -> {
          _id,
          url
        }
      },
      socialLinks[] {
        href,
        type
      }
    }
  `;

  const product = await client.fetch(query, { slug });

  if (Object.entries(product).length === 0) {
    return null;
  }

  return product;
}

const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt={value.description || 'Фото'}
        title={value.description || 'Фото'}
        width={700}
        height={300}
        quality={100}
      />
    ),
  },
};

const iconComponents = {
  Telegram: <Telegram />,
  Youtube: <Youtube />,
  Instagram: <Instagram />,
  Facebook: <Facebook />,
};

const ProductDetails = async ({ params }) => {
  const product = await fetchProduct(params.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.title} ${styles.wrapper}`}>
          {product.title && <h1 className={playfairDisplay.className}>{product.title}</h1>}
        </div>
        <div className={styles.intro}>
          <Image src={product.preview.asset.url} alt="Test image" width="1200" height={700} />
        </div>
      </section>
      <section className={styles.details}>
        {product.videoLink && (
          <iframe
            className={styles.video}
            src={product.videoLink}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        <PortableText value={product.content} components={PortableTextComponent} />
        <div className={styles.actions}>
          {product.paymentLink && (
            <Link className="button size-l primary" href={product.paymentLink} target="_blank">
              Придбати
            </Link>
          )}
          <div className={styles.socials}>
            {product.socialLinks?.map(
              ({ href, type }) =>
                href &&
                type && (
                  <Link
                    key={type}
                    className={`icon-link ${styles[type.toLowerCase()]}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconComponents[type]}
                  </Link>
                ),
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
