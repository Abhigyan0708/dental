import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, Dentzz Studio is currently welcoming new patients. We recommend scheduling an initial consultation so our specialists can understand your unique dental goals and craft a personalized treatment plan."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial visit includes a comprehensive oral examination, digital X-rays if necessary, and a detailed discussion of your aesthetic and functional goals with our master clinicians."
  },
  {
    question: "Do you offer financing options for cosmetic procedures?",
    answer: "Absolutely. We believe luxury dental care should be accessible. Our concierge team will explain our flexible payment plans and third-party financing options during your consultation."
  },
  {
    question: "How long do smile makeovers typically take?",
    answer: "The timeline varies based on your bespoke treatment plan. While some enhancements like laser whitening can be completed in a single visit, comprehensive makeovers involving veneers or implants may take several weeks."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mb-8">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Queries & Details</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Frequently Asked <span className="text-blue-500 italic">Questions</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
              We aim to provide clarity and peace of mind before you even step into our studio. Explore common inquiries about our premium services, or contact our concierge for further details.
            </p>
            
            <div className="p-8 bg-slate-50 border border-blue-100 mt-8">
              <h4 className="font-serif font-bold text-xl text-slate-900 mb-2">Still have questions?</h4>
              <p className="text-slate-600 font-light mb-6">Our dedicated team is available to assist you.</p>
              <a href="tel:555-123-4567" className="inline-block px-8 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors uppercase text-xs tracking-widest">
                Call our Concierge
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-serif text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-full border transition-colors ${openIndex === index ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-slate-200 text-slate-400'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-slate-600 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
