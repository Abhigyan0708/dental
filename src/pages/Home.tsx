import Hero from '../components/Hero';
import Services from '../components/Services';
import Providers from '../components/Providers';
import FAQ from '../components/FAQ';
import Scheduler from '../components/Scheduler';

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <Services />
      <Providers />
      <FAQ />
      <Scheduler />
    </div>
  );
}
