import { useState, useEffect } from 'react';
import { Camera, Heart, Image as ImageIcon } from 'lucide-react';

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('galeria');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Placeholder photos - these will be replaced with actual photos
  const photos = [
    { id: 1, label: 'Foto 1', src: '01.jpg' },
    { id: 2, label: 'Foto 2', src: '101.jpg' },
    { id: 3, label: 'Foto 3', src: '10.jpg' },
    { id: 4, label: 'Foto 4', src: '11.jpg' },
    { id: 5, label: 'Foto 5', src: '20.jpg' },
    { id: 6, label: 'Foto 6', src: '25.jpg' },
    { id: 7, label: 'Foto 7', src: 'Luana e Adailton - pré wedding edt-19.jpg' },
    { id: 8, label: 'Foto 8', src: 'Luana e Adailton - pré wedding edt-31.jpg' }
  ];

  return (
    <section id="galeria" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-champagne" />
            <Camera className="w-5 h-5 text-champagne" />
            <Heart className="w-5 h-5 text-champagne" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-dark-text mb-4">
            Nossa História
          </h2>
          <p className="font-serif text-lg text-light-text italic max-w-2xl mx-auto">
            25 anos de amor, risadas e momentos inesquecíveis. 
            Cada foto conta uma parte da nossa jornada juntos.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative aspect-square bg-white shadow-elegant overflow-hidden transition-all duration-700 hover:shadow-elegant-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Renderiza a foto se houver o 'src', caso contrário mostra o Placeholder */}
              {photo.src ? (
                <img 
                  src={photo.src} 
                  alt={photo.label} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream to-white">
                  <div className="w-16 h-16 bg-champagne/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-champagne/30 transition-colors duration-300">
                    <ImageIcon className="w-8 h-8 text-champagne" />
                  </div>
                  <span className="font-script text-2xl text-champagne">{photo.label}</span>
                  <span className="font-serif text-sm text-light-text mt-1">Em breve</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-champagne/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-serif text-base text-light-text italic">
            Mais fotos serão adicionadas em breve...
          </p>
        </div>
      </div>
    </section>
  );
}
