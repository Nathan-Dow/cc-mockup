import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alignment from "@/assets/service-alignment.jpg";
import suspension from "@/assets/service-suspension.jpg";
import tires from "@/assets/service-tires.jpg";

const cards = [
  { img: alignment, eyebrow: "Precision", title: "3D Wheel Alignment", body: "Hunter-grade laser systems calibrated to factory tolerances." },
  { img: suspension, eyebrow: "Performance", title: "Suspension Tuning", body: "Track-tuned coilovers and OEM ride restoration." },
  { img: tires, eyebrow: "Grip", title: "Premium Tire Services", body: "From all-terrain to performance compounds." },
  { img: alignment, eyebrow: "Diagnostics", title: "Multi-Brand ECU", body: "Deep electronic scanning across European and Asian fleets." },
];

export const Featured = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (d: number) => scroller.current?.scrollBy({ left: d, behavior: "smooth" });

  return (
    <section className="relative bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4">
              <span className="red-bar" />
              <span className="eyebrow">Featured Work</span>
            </div>
            <h2 className="mt-6 font-display text-display-lg font-black uppercase">
              Signature<br />Services.
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button onClick={() => scrollBy(-480)} aria-label="Previous" className="grid h-12 w-12 place-items-center border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollBy(480)} aria-label="Next" className="grid h-12 w-12 place-items-center border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-12 flex gap-6 overflow-x-auto scroll-smooth px-6 pb-6 md:px-10 md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group relative h-[480px] w-[78vw] shrink-0 overflow-hidden bg-background sm:w-[420px] md:h-[560px] md:w-[460px]"
          >
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <span className="eyebrow text-foreground/70">{c.eyebrow}</span>
              <h3 className="mt-3 font-display text-3xl font-black uppercase leading-[0.95] md:text-4xl">
                {c.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm text-foreground/70">{c.body}</p>
              <div className="mt-5 h-px w-12 bg-primary transition-all duration-500 group-hover:w-24" />
            </div>
          </motion.article>
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  );
};
