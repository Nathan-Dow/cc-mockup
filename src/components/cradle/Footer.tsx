import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/customers_cradle_logo.jpg";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Customers Cradle logo" className="h-8 w-8 object-contain" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em]">
              Customers Cradle
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-foreground/65">
            Premium automotive service center. Engineered for drivers who refuse
            to compromise.
          </p>
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-5 space-y-3 text-sm">
            {["Services", "Process", "About", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Follow</div>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Customers Cradle. All rights reserved.</span>
        <span>Manila · Philippines</span>
      </div>
    </div>
    <div className="h-1 w-full bg-primary" />
  </footer>
);
