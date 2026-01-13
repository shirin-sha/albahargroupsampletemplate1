import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Process />
      <Solutions />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
