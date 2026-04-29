import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Wheel Alignment",
  "Suspension Tuning",
  "Tire Services",
  "Brake Systems",
  "Engine Diagnostics",
  "Detailing",
];

export const Booking = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Appointment requested", {
      description: "Our team will confirm your booking within one business hour.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="book" className="relative bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-4">
          <span className="red-bar" />
          <span className="eyebrow">Book Appointment</span>
        </div>
        <h2 className="mt-6 max-w-[16ch] font-display text-display-lg font-black uppercase">
          Reserve your <span className="text-primary">bay.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {[
              { Icon: MapPin, label: "Address", value: "Las Pinas" },
              { Icon: Phone, label: "Phone", value: "+63 949 946 9530" },
              { Icon: Mail, label: "Email", value: "customerscradle.service@gmail.com" },
              { Icon: Clock, label: "Hours", value: "Mon–Sunday · 6:00 AM – 6:00 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5 border-b border-border pb-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background">
                  <c.Icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="eyebrow">{c.label}</div>
                  <div className="mt-2 font-medium">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-background">
              <iframe
                title="Customers Cradle location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0%2C14.6%2C121.08%2C14.66&layer=mapnik"
                className="h-full w-full opacity-80 grayscale"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 border border-border bg-background p-7 md:p-10"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
            <Field label="Vehicle (e.g. 2023 Toyota Fortuner)" name="vehicle" required />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="eyebrow mb-2 block">Service</label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-surface px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>Select a service…</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" required />
            </div>
            <div>
              <label className="eyebrow mb-2 block">Notes</label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us anything else we should know…"
                className="w-full resize-none border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-red disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request Appointment"}
              <span className="h-px w-6 bg-primary-foreground transition-all group-hover:w-10" />
            </button>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              We'll confirm within one business hour.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="eyebrow mb-2 block">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
    />
  </div>
);
