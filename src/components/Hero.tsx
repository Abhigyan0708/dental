import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 lg:pt-0 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2600&auto=format&fit=crop" 
          alt="Premium aesthetic dental clinic" 
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 text-blue-400 text-xs tracking-[0.2em] font-medium uppercase mb-8">
            <Star className="w-3 h-3 fill-blue-500 text-blue-500" />
            <span>Award-Winning Aesthetic Dentistry</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Mastering the Art of <span className="text-blue-500">Perfect Smiles</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Experience world-class cosmetic dentistry, transformative smile makeovers, and luxury care tailored to perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToBook}
              className="px-8 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 tracking-wide"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent text-white border border-white/30 font-semibold hover:border-blue-500 hover:text-blue-400 transition-colors tracking-wide"
            >
              Our Transformations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
