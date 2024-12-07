'use client';

import { useState } from 'react';

import styles from './slider.module.css';
import Image from 'next/image';

const images = [
  { id: 1, src: '/images/review-1.jpg', alt: 'Review 1', width: '359', height: '450' },
  { id: 2, src: '/images/review-2.jpg', alt: 'Review 2', width: '359', height: '300' },
  { id: 3, src: '/images/review-3.jpg', alt: 'Review 3', width: '359', height: '400' },
  { id: 4, src: '/images/review-4.jpg', alt: 'Review 4', width: '359', height: '350' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image) => (
          <div className={styles.slide} key={image.id}>
            <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
