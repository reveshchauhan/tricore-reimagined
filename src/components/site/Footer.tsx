import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { company, leadership } from "@/data/company";
import logo from "@/assets/logo.jpg";


export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Tricore Ventures logo"
            className="h-20 w-auto rounded-md bg-cream p-2"
            width={160}
            height={80}
            loading="lazy"
          />
          <p className="mt-4 font-display text-xl font-extrabold">
            <span className="text-saffron">TRICORE</span> <span className="text-cream">VENTURES</span>
          </p>
          <p className="mt-2 text-xs tracking-[0.18em] text-cream/60">{company.tagline.toUpperCase()}</p>

          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            An import, export and trading company connecting global markets with quality Indian produce and
            industrial goods.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.15em] text-cream uppercase">Services</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-saffron"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.15em] text-cream uppercase">Company</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
            <li>
              <Link to="/about" className="transition-colors hover:text-saffron">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-saffron">
                Product Catalogue
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-saffron">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-saffron">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.15em] text-cream uppercase">Reach Us</h2>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-saffron" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            {company.emails.map((e) => (
              <li key={e} className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-saffron" aria-hidden="true" />
                <a href={`mailto:${e}`} className="hover:text-saffron">
                  {e}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-saffron" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {leadership.map((l) => (
                  <a key={l.phone} href={`tel:${l.phone.replace(/\s/g, "")}`} className="hover:text-saffron">
                    {l.phone}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="brand-bar h-1" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Tricore Ventures. All rights reserved.</p>
        <p className="tracking-[0.15em] uppercase">{company.promise}</p>
      </div>
    </footer>
  );
}
