import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export const FloatingBook = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("book");
      if (!target) return setVisible(window.scrollY > 400);
      const r = target.getBoundingClientRect();
      const inView = r.top < window.innerHeight - 80 && r.bottom > 80;
      setVisible(window.scrollY > 400 && !inView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#book"
      aria-label="Book an appointment"
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 md:bottom-8 md:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <span className="group relative inline-flex items-center gap-3 bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-red transition-all hover:bg-primary-glow">
        <span className="relative grid h-2 w-2 place-items-center">
          <span className="h-2 w-2 rounded-full bg-primary-foreground" />
          <span className="pulse-ring absolute inset-0" />
        </span>
        <Calendar className="h-4 w-4" />
        <span className="hidden sm:inline">Book Appointment</span>
        <span className="sm:hidden">Book</span>
      </span>
    </a>
  );
};
