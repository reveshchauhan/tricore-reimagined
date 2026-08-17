# Tricore Ventures — Refined Site Rebuild

A cleaner, faster rebuild of www.tricoreventures.org keeping the same brand theme (saffron-orange → green Indian tricolour accents, deep navy text, white/soft-cream surfaces, bold geometric headings), with better typography, spacing, and mobile behaviour.

## Pages

- `/` — Home: hero slider (6 slides: Civil Construction, Solar, IT Support, Import-Export, Work Contract, Trading), "10+ Years of Expertise" about block, stats counters (400 / 640 / 320 / 10), services grid (6 cards), contact strip, testimonials carousel, footer CTA.
- `/about` — Company story, Import · Export · Trading pillars, Why Choose Us, Our Approach, Our Commitment, Industries We Serve, leadership team (Sayed Hasan Ahmad, Mohd John, Syed Hasan with their phone/email).
- `/products` — Catalogue from the uploaded PDF, grouped into tabs/sections: Rice, Sugar, Pulses & Beans, Grains & Feed, Spices, Seeds & Nuts. Note that packing, quantity and specs are per-buyer.
- `/contact` — Address (Gurugram, India Accelerator Building), emails, phone numbers, enquiry form with service-type select (visual only, shows a success toast), map embed placeholder.
- Service pages: `/services` index plus `/services/civil-construction`, `/services/solar-plant-systems`, `/services/it-support`, `/services/import-export`, `/services/work-contract`, `/services/trading` — each with hero, overview, capability list, and CTA.

## Design direction

- Tokens in `src/styles.css`: brand saffron, brand green, deep navy ink, warm cream surface, subtle dot/grid texture, gradient used sparingly on the top bar, buttons and the underline accent (matching the original's orange→green bar).
- Headings in a bold geometric sans (Poppins-alternative: Sora/Space Grotesk), body in a clean readable sans; loaded via a `<link>` in `__root.tsx`.
- Improvements over the original: consistent 8pt spacing rhythm, real responsive/mobile nav with a services dropdown, accessible contrast, lazy-loaded images, restrained hover motion, no stretched stock photos.

## Technical notes

- TanStack Router file routes under `src/routes/`; shared `Header`/`Footer` rendered in `__root.tsx` around `<Outlet />`.
- Shared data modules (`src/data/services.ts`, `src/data/products.ts`, `src/data/testimonials.ts`) so pages stay thin.
- shadcn components for tabs, accordion, carousel, select, form inputs; sonner toaster mounted once in `__root.tsx` for the contact form.
- Per-route `head()` with unique title/description/og tags; single H1 per page; semantic sections and alt text.
- Imagery: hero and section images generated into `src/assets/`, plus the brand logo recreated from the PDF's mark; product cards use category imagery rather than 170 low-res PDF crops.
- No backend — the contact form is presentational only.
