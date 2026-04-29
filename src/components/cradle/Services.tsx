import { motion } from "framer-motion";
import {
  Gauge,
  Settings2,
  CircleDot,
  Disc3,
  Cpu,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { num: "01", title: "Wheel Alignment", desc: "Laser-precision 3D alignment to factory specs and beyond.", Icon: Gauge },
  { num: "02", title: "Suspension Tuning", desc: "Coilovers, dampers and ride-height calibration for any terrain.", Icon: Settings2 },
  { num: "03", title: "Tire Services", desc: "Premium tire fitment, rotation, balancing and pressure mapping.", Icon: CircleDot },
  { num: "04", title: "Brake Systems", desc: "OEM and performance pads, rotors and full hydraulic service.", Icon: Disc3 },
  { num: "05", title: "Engine Diagnostics", desc: "Multi-brand ECU scanning, fault tracing and tuning.", Icon: Cpu },
  { num: "06", title: "Detailing", desc: "Paint correction, ceramic coating and concours-grade finishing.", Icon: Sparkles },
];

export const Services = () => {
  return (
    <section id="services" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="shrink-0">
            <div className="flex items-center gap-4">
              <span className="red-bar" />
              <span className="eyebrow">Our Services</span>
            </div>
            <h2 className="mt-6 max-w-[14ch] font-display text-display-lg font-black uppercase">
              Specialised. <span className="text-primary">Uncompromised.</span>
            </h2>
          </div>
          <p className="max-w-xs text-foreground/70 md:text-right">
            Every service is performed by manufacturer-certified technicians using
            calibrated, OEM-grade equipment. No shortcuts.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.num}
              href="#book"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex min-h-[280px] flex-col justify-between bg-background p-8 transition-colors hover:bg-surface md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xs font-semibold tracking-[0.3em] text-primary">
                  {s.num}
                </span>
                <s.Icon className="h-6 w-6 text-foreground/60 transition-colors group-hover:text-primary" strokeWidth={1.25} />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm text-foreground/65">{s.desc}</p>
                <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80">
                  <span className="relative">
                    Learn more
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
