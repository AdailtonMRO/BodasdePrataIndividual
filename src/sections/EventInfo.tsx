import { useState, useEffect } from 'react';
import { Church, Wine, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  location: string;
  address: string;
  time: string;
  mapsUrl: string;
  delay: number;
  isVisible: boolean;
}

function EventCard({ icon, title, location, address, time, mapsUrl, delay, isVisible }: EventCardProps) {
  return (
    <div
      className={`bg-white p-8 md:p-10 shadow-elegant transition-all duration-700 hover:shadow-elegant-hover hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6 text-olive transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        
        <h3 className="font-script text-4xl md:text-5xl text-dark-text mb-4">
          {title}
        </h3>
        
        <div className="w-12 h-px bg-champagne mb-6" />
        
        <p className="font-serif text-xl text-dark-text font-medium mb-2">
          {location}
        </p>
        
        <p className="font-serif text-base text-light-text mb-4 max-w-sm">
          {address}
        </p>
        
        <div className="flex items-center gap-2 text-dark-text mb-6">
          <Clock className="w-4 h-4" />
          <span className="font-sans text-sm uppercase tracking-wider font-bold">{time}</span>
        </div>
        
        <Button
          variant="outline"
          className="border-champagne text-champagne hover:bg-champagne hover:text-white transition-all duration-300 rounded-none px-6 py-5 font-sans text-sm uppercase tracking-wider"
          onClick={() => window.open(mapsUrl, '_blank')}
        >
          <MapPin className="w-4 h-4 mr-2" />
          Como Chegar
          <ExternalLink className="w-3 h-3 ml-2" />
        </Button>
      </div>
    </div>
  );
}

export function EventInfo() {
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

    const element = document.getElementById('evento');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      icon: <Church className="w-8 h-8" />,
      title: 'Cerimônia',
      location: 'Capela do Alphaville PE1',
      address: 'Rodovia BR 232, Km 17,1 - Manassu, Jaboatão dos Guararapes - PE, 54130-340',
      time: 'Às 16:00',
      mapsUrl: 'https://waze.com/ul?q=Capela%20Alphaville%20PE1%2C%20Jaboat%C3%A3o%20dos%20Guararapes%2C%20PE',
      delay: 0,
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: 'Festa',
      location: 'Salão de Festa Alphaville PE2',
      address: 'Rodovia BR 232, km 17,1, Vargem Fria, Jaboatão dos Guararapes - PE, 54125-010',
      time: 'Após a cerimônia.',
      mapsUrl: 'https://waze.com/ul?q=Clube%20Alphaville%20PE2%2C%20Jaboat%C3%A3o%20dos%20Guararapes%2C%20PE',
      delay: 150,
    },
  ];

  return (
    <section id="evento" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-script text-5xl md:text-6xl text-dark-text mb-4">
            Informações do Evento
          </h2>
          <p className="font-serif text-lg text-light-text italic">
            Tudo o que você precisa saber para celebrar conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.title} {...event} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
