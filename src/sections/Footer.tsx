import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('footer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className="py-16 md:py-24 bg-dark-text">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Monogram */}
          <div className="mb-8">
            <span className="font-nome text-6xl md:text-7xl text-champagne">
              L<span className="text-white">&</span>A
            </span>
          </div>

          {/* Names */}
          <h3 className="font-nome text-3xl md:text-4xl text-white mb-2">
            Luana & Adailton
          </h3>

          {/* Date */}
          <p className="font-sans text-sm uppercase tracking-widest text-champagne mb-8">
            09.05.2026
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-champagne/50 mb-8" />

          {/* Quote */}
          <p className="font-serif text-xl md:text-2xl text-white/90 italic mb-8 max-w-lg">
            "O amor é uma escolha diária"
          </p>

          {/* Hearts */}
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-4 h-4 text-champagne fill-champagne" />
            <Heart className="w-5 h-5 text-champagne fill-champagne" />
            <Heart className="w-4 h-4 text-champagne fill-champagne" />
          </div>

          {/* Copyright */}
          <p className="font-serif text-sm text-white/60">
            Com carinho, para nossos amigos e familiares
          </p>

          <p className="font-sans text-xs text-white/40 mt-4 uppercase tracking-wider">
            Bodas de Prata • 25 anos de amor
          </p>
        </div>
      </div>
    </footer>
  );
}
