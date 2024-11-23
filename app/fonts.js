import { Montserrat } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['cyrillic'],
  style: ['normal', 'italic'],
  display: 'swap',
});
