import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import '@/styles/index.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: '%s - Viktory Kinesio',
    default: 'Viktory Kinesio',
  },
  authors: [
    {
      name: 'Viktory Kinesio',
      url: 'https://www.instagram.com/viktory.kinesio',
    },
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    url: '/',
    siteName: 'Viktory Kinesio',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: 'Viktory Kinesio',
      },
    ],
    type: 'website',
    locale: 'uk',
  },
  twitter: {
    site: `Viktory Kinesio`,
    card: 'summary_large_image',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`],
  },
};

export const viewport = {
  themeColor: '#fff',
  colorScheme: 'only light',
};

const RootLayout = ({ children }) => {
  return (
    <div id="root">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
