import Feedback from '../components/Feedback';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <Feedback />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-200 mt-16 pt-16">
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
               <Phone className="w-5 h-5 text-blue-600" />
             </div>
             <h4 className="font-bold text-slate-900 mb-2">Phone</h4>
             <p className="text-slate-600 font-light">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
               <Mail className="w-5 h-5 text-blue-600" />
             </div>
             <h4 className="font-bold text-slate-900 mb-2">Email</h4>
             <p className="text-slate-600 font-light">concierge@dentzzstudio.com</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
               <MapPin className="w-5 h-5 text-blue-600" />
             </div>
             <h4 className="font-bold text-slate-900 mb-2">Location</h4>
             <p className="text-slate-600 font-light">Beverly Hills, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
