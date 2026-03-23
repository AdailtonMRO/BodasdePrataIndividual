import { useState, useEffect } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export function GiftList() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const pixKey = 'adailton.medeiros@gmail.com';
  const accountName = 'Adailton Medeiros Rodrigues de Oliveira';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('presentes');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast.success('Chave PIX copiada!');
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      toast.success('Chave PIX copiada!');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="presentes" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-script text-5xl md:text-6xl text-dark-text mb-4">
            Lista de Presentes
          </h2>
          <p className="font-serif text-lg text-light-text italic max-w-2xl mx-auto">
            <strong>Sua presença é o melhor presente, mas se desejar nos presentear, 
            seu carinho será transformado em solidariedade: as contribuições 
            serão doadas a uma causa especial.</strong>
          </p>
        </div>

        {/* PIX Details Area */}
        <div id="pix-key-section" className={`max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-elegant transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-olive rounded-full flex items-center justify-center mb-6 animate-pulse-soft">
              <Gift className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-script text-3xl md:text-4xl text-dark-text mb-6">
              Presenteie com <span className="font-serif">PIX</span>
            </h3>
            
            <p className="font-serif text-lg text-light-text italic mb-8 max-w-lg">
              <strong>Qualquer valor será recebido com muita gratidão e 
              destinado integralmente a quem mais precisa.</strong>
            </p>

            <div className="bg-cream p-6 md:p-8 w-full max-w-lg mb-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <p className="font-sans text-xs uppercase tracking-wider text-light-text mb-1">
                    Chave E-mail
                  </p>
                  <p className="font-serif text-lg md:text-xl text-dark-text break-all">
                    {pixKey}
                  </p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 w-12 h-12 bg-champagne hover:bg-[#B8A796] text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Copiar chave PIX"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-wider text-light-text mb-1">
                Nome
              </p>
              <p className="font-serif text-lg text-dark-text">
                {accountName}
              </p>
            </div>

            <div className="w-24 h-px bg-champagne" />
          </div>
        </div>
      </div>
    </section>
  );
}
