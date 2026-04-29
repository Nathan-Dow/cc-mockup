
# Customers Cradle — Premium Automotive Landing Page

A single, immersive, Ferrari-inspired landing page for a Philippine premium service center. Dark, cinematic, scroll-driven, with a Racing Red accent line running through a Deep Charcoal and White world.

## Design system

- **Palette**: Deep Charcoal `#0E0E10` (background), Off-White `#F5F5F5` (text), Racing Red `#E10600` (accent — Ferrari's exact red), with a soft graphite `#1A1A1D` for section breaks.
- **Typography**: Sans-serif throughout. Oversized display weights for headlines (think 80–140px hero), tight tracking, uppercase eyebrow labels with wide letter-spacing. Body in a clean neutral sans.
- **Motion**: Subtle parallax on hero, fade-up reveals on scroll, smooth hover lifts on cards, animated red underline on links, traffic-light style red dot pulse on the floating CTA.
- **Layout**: Full-bleed sections, generous negative space, a persistent thin red accent line as a visual signature.

## Page sections (top to bottom)

1. **Sticky minimal nav** — Logo left ("CC" monogram + wordmark), center links (Services, Process, About, Contact), right "Book Now" pill button. Transparent over hero, gains charcoal background on scroll.

2. **Hero (full viewport)**
   - AI-generated cinematic image: a high-end SUV (Toyota Fortuner style) raised on a hydraulic lift inside a moody, professionally-lit service bay.
   - Oversized headline: "ENGINEERED FOR THE ROAD AHEAD"
   - Sub-line: "Premium automotive care. Manila."
   - Red accent bar + small uppercase eyebrow "EST. PHILIPPINES"
   - Scroll indicator at bottom.

3. **Marquee strip** — Slow horizontal scroll of service keywords separated by red dots: WHEEL ALIGNMENT • SUSPENSION • TIRES • DIAGNOSTICS • DETAILING.

4. **Services grid** — 6 cards in a clean grid (Wheel Alignment, Suspension Tuning, Tire Services, Brake Systems, Engine Diagnostics, Detailing). Each card: number (01–06), icon, title, one-line description, hover reveals red underline + arrow.

5. **Horizontal service carousel** (Ferrari-style) — Large image cards that scroll horizontally for "Featured Services" with rich photography, oversized type overlays.

6. **Process / Why Us** — Dark immersive section, 4 steps (Inspect → Diagnose → Service → Deliver) laid out horizontally with red connector line.

7. **Stats band** — Years in service, vehicles serviced, certified technicians, 5-star reviews. Big numerals, thin labels.

8. **About / Trust** — Split layout: workshop image left, copy right emphasizing certified technicians, OEM-grade equipment, transparent pricing.

9. **Contact / Booking section** (anchor target for the floating CTA)
   - Full-width charcoal block, headline "BOOK YOUR APPOINTMENT"
   - Two columns: contact details (address, phone, hours, map embed placeholder) + a simple inquiry form (name, vehicle, service, preferred date, message).
   - Submit shows a success toast (front-end only, no backend).

10. **Footer** — Minimal: logo, nav repeat, socials, fine print, red hairline divider.

11. **Floating "Book an Appointment" button** — Bottom-right, Racing Red pill with calendar icon, subtle pulse, smooth-scrolls to the booking section. Hidden when the booking section is in view.

## Hero image generation

Generate one cinematic 16:9 hero image via the AI gateway: dark service bay, dramatic side lighting, SUV elevated on a two-post hydraulic lift, technician silhouette optional, deep charcoal tones with a single red accent (toolbox or signage). Saved to `src/assets/` and imported into the hero.

## Responsiveness

- Mobile: hero text scales down, nav collapses to a hamburger sheet, services grid becomes 1–2 columns, horizontal carousel keeps swipe behavior, floating CTA stays bottom-right with safe-area padding, booking form stacks.
- Tablet: 2-column services grid, condensed nav.
- Desktop/large: full cinematic experience as described.

## Technical notes

- Update `src/index.css` design tokens to the Charcoal/Red/White palette (HSL).
- Extend `tailwind.config.ts` with display font sizes and the brand red.
- Build reusable components: `Nav`, `Hero`, `Marquee`, `ServicesGrid`, `ServiceCarousel`, `Process`, `Stats`, `About`, `BookingSection`, `Footer`, `FloatingBookButton`.
- All routing stays in the existing single `Index` route.
- Smooth scroll via native CSS + an `id="book"` anchor on the booking section.
- Use `lucide-react` icons already available; shadcn `Button`, `Input`, `Textarea`, `Sonner` toaster for the form feedback.
- Generate the hero image once at build-time setup using the AI gateway script and commit the resulting PNG into `src/assets/`.
