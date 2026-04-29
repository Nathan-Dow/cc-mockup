import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Inspect", d: "Comprehensive multi-point vehicle assessment." },
  { n: "02", t: "Diagnose", d: "Computerised diagnostics and transparent reporting." },
  { n: "03", t: "Service", d: "Certified work using OEM-grade parts and tools." },
  { n: "04", t: "Deliver", d: "Quality control, road test, and detailed handover." },
];

export const Process = () => {
  return (
    <section id="process" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-4">
          <span className="red-bar" />
          <span className="eyebrow">The Process</span>
        </div>
        <h2 className="mt-6 max-w-[16ch] font-display text-display-lg font-black uppercase">
          Four steps. <span className="text-primary">Zero compromise.</span>
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div className="absolute left-0 top-6 hidden h-px w-1/4 bg-primary md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mb-6 grid h-12 w-12 place-items-center border border-border bg-background font-display text-sm font-bold text-primary">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/65">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
