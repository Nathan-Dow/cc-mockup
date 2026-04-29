import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-suv-lift.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-background">
      {/* Background image */}
      <motion.img
        src={heroImage}
        alt="Premium SUV elevated on a hydraulic lift inside the Customers Cradle service bay"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="hero-vignette absolute inset-0" />
      <div className="grain absolute inset-0 opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <span className="red-bar" />
          <span className="eyebrow text-foreground/70">Est. Philippines · Premium Service</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[18ch] font-display text-display-xl font-black uppercase text-foreground"
        >
          Engineered<br />
          <span className="text-foreground/90">for the road</span><br />
          <span className="text-primary">ahead.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base text-foreground/70 md:text-lg">
            Premium automotive care from certified specialists. Wheel alignment,
            suspension tuning, tires, diagnostics — under one roof, in Manila.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-red"
            >
              Book Appointment
              <span className="h-px w-6 bg-primary-foreground transition-all group-hover:w-10" />
            </a>
            <a
              href="#services"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80 hover:text-foreground"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.4em] text-foreground/60 md:flex"
      >
        Scroll
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.a>
    </section>
  );
};
