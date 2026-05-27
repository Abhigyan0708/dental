import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [user, setUser] = useState<{email: string} | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header 
        user={user} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onLogout={() => setUser(null)}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <ChatbotWidget />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={(u) => { setUser(u); setIsAuthModalOpen(false); }} 
      />
      <Footer />
    </div>
  );
}
