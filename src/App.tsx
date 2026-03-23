import { Toaster } from 'sonner';
import { Hero } from './sections/Hero';
import { Countdown } from './sections/Countdown';
import { EventInfo } from './sections/EventInfo';
import { RSVP } from './sections/RSVP';
import { GiftList } from './sections/GiftList';
import { Gallery } from './sections/Gallery';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-cream">
      <Toaster 
        position="top-center" 
        richColors 
        toastOptions={{
          style: {
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '16px',
          },
        }}
      />
      <Hero />
      <Countdown />
      <EventInfo />
      <RSVP />
      <GiftList />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
