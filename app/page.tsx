'use client';

import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductShowcase from './components/ProductShowcase';
import RoadmapMarket from './components/RoadmapMarket';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Circuit-board background pattern */}
      <div className="circuit-bg" />

      <Nav />
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <RoadmapMarket />
      <Contact />
      <Footer />
    </main>
  );
}
