import { Nav } from "@/components/cradle/Nav";
import { Hero } from "@/components/cradle/Hero";
import { Marquee } from "@/components/cradle/Marquee";
import { Services } from "@/components/cradle/Services";
import { Featured } from "@/components/cradle/Featured";
import { Process } from "@/components/cradle/Process";
import { Stats } from "@/components/cradle/Stats";
import { About } from "@/components/cradle/About";
import { Booking } from "@/components/cradle/Booking";
import { Footer } from "@/components/cradle/Footer";
import { FloatingBook } from "@/components/cradle/FloatingBook";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground" onContextMenu={(e) => e.preventDefault()}>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Featured />
      <Process />
      <Stats />
      <About />
      <Booking />
      <Footer />
      <FloatingBook />
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute select-none font-display text-[clamp(1.5rem,4vw,3rem)] font-black uppercase tracking-widest text-white/10 rotate-[-35deg] whitespace-nowrap"
            style={{
              left: `${(i % 3) * 36 - 5}%`,
              top: `${Math.floor(i / 3) * 26 - 5}%`,
            }}
          >
            Hinara Solutions
          </span>
        ))}
      </div>
    </main>
  );
};

export default Index;
