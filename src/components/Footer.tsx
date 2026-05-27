import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-serif font-bold text-2xl">D</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">Dentzz Studio</span>
          </Link>
          <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
            Setting the global standard in aesthetic dentistry. We craft bespoke smiles that elevate confidence and redefine luxury care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-slate-800 rounded-full text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 border border-slate-800 rounded-full text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 border border-slate-800 rounded-full text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-slate-300 font-light text-sm">123 Luxury Ave, Suite 100<br />Beverly Hills, CA 90210</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-slate-300 font-light text-sm">(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-slate-500 shrink-0" />
              <span className="text-slate-300 font-light text-sm">concierge@dentzzstudio.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-6">Consultations</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-slate-500 shrink-0" />
              <div className="text-slate-300 space-y-2 font-light text-sm">
                <div className="flex justify-between w-full">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between w-full text-slate-500">
                  <span>Sunday:</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs tracking-wide">
        <p>&copy; {new Date().getFullYear()} Dentzz Studio Premium Care. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
