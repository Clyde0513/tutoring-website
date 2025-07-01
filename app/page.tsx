import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CustomerReviews from '@/components/CustomerReviews';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CustomerReviews />
      <Contact />
    </div>
  );
}
