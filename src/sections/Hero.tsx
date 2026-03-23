import { useRef, useState } from "react";
import { ChevronDown } from 'lucide-react';

export function Hero() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.3;
      audio.play();
      setPlaying(true);
    }
  };

  const scrollToContent = () => {
    const element = document.getElementById('contagem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Música */}
      <audio ref={audioRef} loop>
        <source src="allofme.mp3" type="audio/mpeg" />
      </audio>

      {/* Botão da música */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        {playing ? "🔊" : "🎵"}
      </button>

      <section className="min-h-screen flex flex-col items-center justify-center relative bg-cream px-4 py-16">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-2 8-12 12-12 20s8 12 12 20c2-8 12-12 12-20s-8-12-12-20z' fill='%238B9A7D' fill-opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Monograma */}
          <div className="animate-scale-in mb-4">
            <img
              src="Monograma.png"
              alt="Luana & Adailton Monograma"
              className="w-[128] h-[128] object-contain"
            />
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-[#737373] mb-0 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Bodas de Prata
          </h2>
          {/* Subtitle */}
          <p className="font-serif text-lg md:text-xl text-light-text italic mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Vinte e cinco anos de cumplicidade
          </p>

          {/* Main Title */}
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-dark-text mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="font-nome text-[#646044]">Luana</span>
            <span className="text-champagne"> & </span>
            <span className="font-nome text-[#646044]">Adailton</span>
          </h1>

          {/* Description */}
          <p className="font-serif text-[28px] md:text-[34px] text-light-text mt-1 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            Convidam para a cerimônia de renovação de votos
          </p>



          {/* Date */}
          <div className="flex items-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            <div className="h-px w-16 bg-champagne" />
            <p className="font-script text-3xl md:text-4xl text-dark-text">
              09 de Maio de 2026
            </p>
            <div className="h-px w-16 bg-champagne" />
          </div>

          {/* Quote */}
          <p className="font-serif text-base md:text-lg text-light-text italic mt-2 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            "O amor não é apenas um sentimento, mas uma escolha diária"
          </p>

        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-text hover:text-verde transition-colors cursor-pointer animate-fade-in opacity-0"
          style={{ animationDelay: '1s' }}
          aria-label="Rolar para conteúdo"
        >
          <span className="font-sans text-xs uppercase tracking-widest font-bold">
            Role para baixo
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce-soft" />
        </button>

      </section>
    </>
  );
}