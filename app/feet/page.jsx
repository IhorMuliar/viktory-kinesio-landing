// app/feetpage.jsx

import '../feet/reset.css';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Benefits from './_components/Benefits';
import ForWhom from './_components/ForWhom';
import WhatYouGet from './_components/WhatYouGet';
import About from './_components/About';
import Packages from './_components/Packages';
import Results from './_components/Results';
import Footer from './_components/Footer';
import FloatingButton from './_components/FloatingButton';

export const metadata = {
  title: {
    absolute: 'Viktory Kinesio - Стопи це твоя опора',
  },
  description:
    "Практикум для тих, хто хоче повернути легкість ходи, здоров'я стоп та внутрішню опору в житті!",
  alternates: {
    canonical: 'https://viktory-kinesio.com/feet',
  },
};

/**
 * FeetPage - Main landing page for the feet course
 * @returns {JSX.Element} The FeetPage component
 */
export default function FeetPage() {
  return (
    <>
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Benefits />
        <ForWhom />
        <WhatYouGet />
        <About />
        <div id="packages">
          <Packages />
        </div>
        <Results />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
