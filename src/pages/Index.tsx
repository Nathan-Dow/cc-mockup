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
    <main className="min-h-screen bg-background text-foreground">
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
    </main>
  );
};

export default Index;
