import { motion } from 'motion/react';
import { Sparkles, Shield, HeartPulse, Activity } from 'lucide-react';

const services = [
  {
    id: 'cosmetic',
    title: 'Signature Smile Makeovers',
    description: 'Bespoke veneers and aesthetic contouring to craft your ultimate, confidence-boosting smile.',
    icon: Sparkles,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'implants',
    title: 'Premium Implants',
    description: 'State-of-the-art titanium and zirconia implants that flawlessly restore both function and aesthetics.',
    icon: Activity,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'ortho',
    title: 'Invisible Orthodontics',
    description: 'Discreet, clear alignment solutions tailored to perfectly straighten your teeth over time.',
    icon: HeartPulse,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'laser',
    title: 'Advanced Laser Dentistry',
    description: 'Painless, highly precise treatments powered by cutting-edge laser technology for rapid healing.',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Redefining Dental Luxury</h3>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            We merge artistic vision with clinical excellence to provide bespoke dental procedures. Discover a new standard in aesthetic and restorative care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-none p-10 shadow-sm hover:shadow-xl transition-all border border-blue-100/50 group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 border border-blue-100 ${service.color} transition-transform group-hover:scale-110`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="text-blue-600 font-medium uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Discover <span aria-hidden="true">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
