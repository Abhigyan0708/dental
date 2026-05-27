import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to backend (to be stored in MySQL via Flask)
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Feedback & Queries</h3>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Have a question or want to leave feedback about your experience? Send us a message and our team will get back to you.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 shadow-2xl border border-slate-100 relative"
        >
          {isSuccess ? (
             <div className="text-center py-12">
               <div className="w-20 h-20 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-blue-600" />
               </div>
               <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Message Received</h3>
               <p className="text-slate-600 mb-8 max-w-md mx-auto font-light">
                 Thank you for reaching out to Dentzz Studio. We value your input and will respond to your query shortly.
               </p>
               <button 
                 onClick={() => setIsSuccess(false)}
                 className="px-8 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors uppercase text-sm tracking-widest"
               >
                 Send Another Message
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="feedbackName" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Name</label>
                  <input required type="text" id="feedbackName" name="name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="feedbackEmail" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Email</label>
                  <input required type="email" id="feedbackEmail" name="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="feedbackSubject" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Subject</label>
                <select required id="feedbackSubject" name="subject" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-700">
                  <option value="General Query">General Query</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Treatment Information">Treatment Information</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedbackMessage" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Message</label>
                <textarea required id="feedbackMessage" name="message" rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="How can we help you?" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-blue-500 text-white font-medium uppercase text-sm tracking-widest hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-4"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
