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

/**
 * FeetPage - Main landing page for the feet course
 * @returns {JSX.Element} The FeetPage component
 */
export default function FeetPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ForWhom />
        <WhatYouGet />
        <About />
        <Packages />
        <Results />
      </main>
      <Footer />
    </>
  );
}
