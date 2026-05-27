import Providers from '../components/Providers';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Our Story</h2>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
          Redefining <span className="text-blue-500 italic">Luxury Care</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          At Dentzz Studio, we believe that a beautiful smile is a work of art. 
          Our philosophy marries advanced clinical expertise with a luxurious, comforting environment. 
          Every treatment is custom-tailored to provide you with not just a brilliant smile, but an 
          exceptional experience from the moment you walk through our doors.
        </p>
      </div>
      <Providers />
    </div>
  );
}
