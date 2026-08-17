import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { company, leadership } from "@/data/company";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const email = company.emails[0] ?? "";
  const phone = leadership[0]?.phone ?? "";

  return (
    <header className="sticky top-0 z-50">
      <div className="brand-bar text-saffron-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs font-medium sm:justify-between">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2">
            <Mail className="size-3.5" aria-hidden="true" />
            {email}
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2">
            <Phone className="size-3.5" aria-hidden="true" />
            {phone}
          </a>

        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold text-foreground transition-colors hover:text-saffron"
                activeProps={{ className: "text-saffron" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-saffron"
                activeProps={{ className: "text-saffron" }}
              >
                Our Services
                <ChevronDown className="size-4" aria-hidden="true" />
              </Link>
              {servicesOpen ? (
                <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                  <ul className="rounded-lg border border-border bg-popover p-2 shadow-card">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-saffron"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {navLinks.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold text-foreground transition-colors hover:text-saffron"
                activeProps={{ className: "text-saffron" }}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="rounded-full brand-bar px-5 py-2.5 text-sm font-semibold text-saffron-foreground"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile">
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold"
                >
                  All Services
                </Link>
                <ul className="ml-3 border-l border-border pl-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-2 text-sm text-muted-foreground"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
