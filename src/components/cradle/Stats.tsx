import { motion } from "framer-motion";
const stats = [
  { v: "12+", l: "Years on the bay" },
  { v: "8,400", l: "Vehicles serviced" },
  { v: "24", l: "Certified technicians" },
  { v: "4.9★", l: "Customer rating" },
];

export const Stats = () => (
  <section className="border-y border-border bg-surface py-16 md:py-20">
    <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
      {stats.map((s, i) => (
        <motion.div
          key={s.l}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        >
          <div className="font-display text-5xl font-black md:text-6xl">{s.v}</div>
          <div className="mt-3 eyebrow">{s.l}</div>
        </motion.div>
      ))}
    </div>
  </section>
);
