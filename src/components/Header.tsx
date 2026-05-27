import { useState, useEffect } from 'react';
import { Menu, X, Phone, User, LogOut } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface HeaderProps {
  user: { email: string } | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export default function Header({ user, onOpenAuth, onLogout }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      setTimeout(() => {
        const id = (location.state as any).scrollTo;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-2xl">D</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">
            Dentzz Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium transition-colors hover:text-blue-400 text-white/90">Home</Link>
          <Link to="/about" className="font-medium transition-colors hover:text-blue-400 text-white/90">About</Link>
          <button onClick={() => scrollToSection('services')} className="font-medium transition-colors hover:text-blue-400 text-white/90">Services</button>
          <Link to="/contact" className="font-medium transition-colors hover:text-blue-400 text-white/90">Contact</Link>
          
          <div className="flex items-center gap-4 ml-4">
            <a href="tel:555-123-4567" className="flex items-center gap-2 font-medium transition-colors hover:text-blue-400 text-white">
              <Phone className="w-4 h-4 text-blue-500" />
              (555) 123-4567
            </a>
            {user ? (
              <div className="flex items-center gap-3 ml-2 mr-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <User className="w-4 h-4 text-blue-400" />
                  <span className="text-white/90 text-sm font-medium">{user.email.split('@')[0]}</span>
                </div>
                <button onClick={onLogout} className="text-white/60 hover:text-red-400 transition-colors p-1" title="Logout">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth} 
                className="font-medium transition-colors hover:text-blue-400 text-white px-2"
              >
                Sign In
              </button>
            )}
            <button 
              onClick={() => scrollToSection('book')}
              className="px-6 py-2.5 rounded hover:bg-blue-600 bg-blue-500 text-white font-medium transition-all shadow-sm tracking-wide"
            >
              Book Consultation
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl py-4 flex flex-col px-4 gap-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left font-medium text-white/90 py-2 hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-left font-medium text-white/90 py-2 hover:text-blue-400">About</Link>
          <button onClick={() => scrollToSection('services')} className="text-left font-medium text-white/90 py-2 hover:text-blue-400">Services</button>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-left font-medium text-white/90 py-2 hover:text-blue-400">Contact</Link>
          <div className="h-px bg-slate-800 my-2" />
          <a href="tel:555-123-4567" className="flex items-center gap-2 font-medium text-white py-2 hover:text-blue-400">
            <Phone className="w-5 h-5 text-blue-500" />
            (555) 123-4567
          </a>
          {user ? (
            <div className="flex items-center justify-between py-2 border-b border-slate-800 mb-2 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <User className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white text-sm font-medium">{user.email.split('@')[0]}</span>
              </div>
              <button onClick={onLogout} className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }} 
              className="text-left font-medium text-white/90 py-2 hover:text-blue-400"
            >
              Sign In / Register
            </button>
          )}
          <button 
            onClick={() => scrollToSection('book')}
            className="w-full mt-2 px-5 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}
