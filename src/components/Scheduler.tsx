import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import type { AppointmentFormData } from '../types';

export default function Scheduler() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create form data object
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to backend (will be replaced by Flask in production)
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="book" className="py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-none p-16 text-center shadow-lg border border-blue-100"
          >
            <div className="w-20 h-20 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Request Received</h3>
            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto font-light leading-relaxed">
              Thank you for choosing Dentzz Studio. Our concierge team will contact you shortly to confirm your exclusive appointment time.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-10 py-5 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors tracking-wide uppercase text-sm"
            >
              Book Another Consultation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Your Experience</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Begin your journey to a <span className="text-blue-500 italic">flawless smile</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
              Scheduling your private consultation is the first step. Enter your preferred details, and our dedicated coordinators will secure your time with our specialists.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 flex items-center justify-center font-serif text-xl text-blue-500 border border-blue-200">1</div>
                <p className="text-slate-700 font-medium">Submit your preferred date & time</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 flex items-center justify-center font-serif text-xl text-blue-500 border border-blue-200">2</div>
                <p className="text-slate-700 font-medium">Concierge team confirmation</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 flex items-center justify-center font-serif text-xl text-blue-500 border border-blue-200">3</div>
                <p className="text-slate-700 font-medium">Arrive for your luxury consultation</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-12 shadow-2xl border border-slate-100 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">First Name</label>
                  <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Last Name</label>
                  <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Phone</label>
                  <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Email</label>
                  <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Preferred Date</label>
                  <input required type="date" id="date" name="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Preferred Time</label>
                  <select required id="time" name="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700">
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="providerId" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Preferred Specialist (Optional)</label>
                <select id="providerId" name="providerId" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700">
                  <option value="">No Preference</option>
                  <option value="dr-smith">Dr. Sarah Smith</option>
                  <option value="dr-johnson">Dr. Michael Johnson</option>
                </select>
              </div>

              <div>
                <label htmlFor="reason" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Area of Interest</label>
                <textarea required id="reason" name="reason" rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="E.g., Smile makeover, implants, veneers..." />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-blue-500 text-white font-medium uppercase text-sm tracking-widest hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-4"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Request Consultation'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
