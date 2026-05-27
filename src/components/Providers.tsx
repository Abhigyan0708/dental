import { motion } from 'motion/react';
import type { Provider } from '../types';

const providers: Provider[] = [
  {
    id: 'dr-smith',
    name: 'Dr. Sarah Smith, DDS',
    role: 'Lead Dentist',
    bio: 'Dr. Smith has over 15 years of experience in restorative and cosmetic dentistry. She is passionate about creating anxiety-free experiences for all patients.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dr-johnson',
    name: 'Dr. Michael Johnson, DMD',
    role: 'Orthodontist & Pediatric Specialist',
    bio: 'Specializing in pediatric care and modern orthodontics, Dr. Johnson brings a gentle touch and expert knowledge to every growing smile.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'amanda',
    name: 'Amanda Reyes, RDH',
    role: 'Registered Dental Hygienist',
    bio: 'Amanda provides thorough, gentle cleanings and loves educating patients on optimal home care routines.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Providers() {
  return (
    <section id="team" className="py-32 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Our Experts</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Master Clinicians</h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Our specialists are globally recognized for excellence in cosmetic and restorative dentistry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-transparent group"
            >
              <div className="relative h-96 overflow-hidden mb-6">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={provider.imageUrl} 
                  alt={provider.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div>
                <p className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-3">{provider.role}</p>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{provider.name}</h4>
                <p className="text-slate-400 font-light leading-relaxed">
                  {provider.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
