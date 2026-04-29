import { motion } from "framer-motion";
import { Check } from "lucide-react";
import workshop from "@/assets/about-workshop.jpg";

const points = [
  "Manufacturer-certified specialists",
  "Calibrated, OEM-grade equipment",
  "Transparent diagnostics & pricing",
  "Premium parts, fully warrantied",
];

export const About = () => (
  <section id="about" className="relative bg-background py-24 md:py-36">
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-[4/5] overflow-hidden lg:aspect-auto"
      >
        <img src={workshop} alt="Customers Cradle service workshop" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute bottom-6 left-6 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">
          Philippines
        </div>
      </motion.div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4">
          <span className="red-bar" />
          <span className="eyebrow">About the Cradle</span>
        </div>
        <h2 className="mt-6 font-display text-display-lg font-black uppercase">
          Built by drivers,<br /><span className="text-primary">for drivers.</span>
        </h2>
        <p className="mt-6 max-w-lg text-foreground/70">
          Customers Cradle is a specialist service center engineered around one
          principle: every vehicle deserves expert, transparent, and meticulous
          care. From daily SUVs to weekend track machines — your car is in the
          right hands.
        </p>

        <ul className="mt-10 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-4">
              <span className="grid h-6 w-6 place-items-center bg-primary">
                <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-foreground/85">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
