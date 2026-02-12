/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Ingredients from './components/Ingredients';
import HowToUse from './components/HowToUse';
import TrustSection from './components/TrustSection';
import Compliance from './components/Compliance';
import OrderForm from './components/OrderForm';
import PolicyAccordion from './components/PolicyAccordion';
import Footer from './components/Footer';
import SommelierChat from './components/SommelierChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111111] selection:bg-[#C6A75E] selection:text-[#111111] overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="bg-[#111111]">
          <About />
        </section>

        <section id="product" className="bg-[#1a1a1a]">
          <Product />
        </section>

        <section id="ingredients" className="bg-[#111111]">
          <Ingredients />
        </section>

        <section id="pricing" className="bg-[#1a1a1a]">
          <Pricing />
        </section>

        <section id="how-to" className="bg-[#111111]">
          <HowToUse />
        </section>

        <section id="trust" className="bg-[#1a1a1a]">
          <TrustSection />
        </section>

        <section id="compliance" className="bg-[#111111]">
          <Compliance />
        </section>

        <section id="order" className="bg-[#1a1a1a]">
          <OrderForm />
        </section>

        <section id="policies" className="bg-[#111111]">
          <PolicyAccordion />
        </section>
      </main>

      <Footer />
      <SommelierChat />
    </div>
  );
};

export default App;