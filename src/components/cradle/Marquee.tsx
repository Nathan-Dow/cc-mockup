const items = [
  "Wheel Alignment",
  "Suspension Tuning",
  "Tire Services",
  "Brake Systems",
  "Engine Diagnostics",
  "Detailing",
  "OEM-Grade Equipment",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-foreground/80 md:text-3xl">
              {it}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
};
