import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/data/services";
import { stats, testimonials, whyChooseUs } from "@/data/company";
import aboutImg from "@/assets/about-corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tricore Ventures — Import, Export, Trading & Project Services" },
      {
        name: "description",
        content:
          "Tricore Ventures delivers civil construction, solar plants, IT support, import-export, contract staffing and commodity trading from Gurugram, India.",
      },
      { property: "og:title", content: "Tricore Ventures — Your Vision. Our Expertise." },
      {
        property: "og:description",
        content:
          "Connecting markets, building trust and delivering value across construction, solar, IT, trade and workforce services.",
      },
    ],
  }),
  component: HomePage,
});

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % services.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden bg-ink">
      {services.map((s, i) => (
        <img
          key={s.slug}
          src={s.image}
          alt={s.name}
          width={1600}
          height={900}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">
          {services[active]?.index} — {services[active]?.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-cream sm:text-5xl lg:text-6xl">
          {services[active]?.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">{services[active]?.heroLead}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full brand-bar px-7 py-3.5 text-sm font-semibold text-saffron-foreground"
          >
            {services[active]?.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 flex gap-3" role="tablist" aria-label="Hero slides">
          {services.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.name}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-12 bg-saffron" : "w-6 bg-cream/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Corporate office towers"
            width={1200}
            height={1400}
            loading="lazy"
            className="h-[420px] w-full rounded-lg object-cover shadow-card lg:h-[520px]"
          />
          <div>
            <SectionHeading
              eyebrow="Your trusted partner"
              title="10+ Years of Expertise Driving Innovation and Excellence"
              lead="With over a decade of experience, we specialise in delivering solutions that empower growth, optimise processes and drive excellence across industries — from construction and energy to global trade."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brandgreen" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-saffron px-6 py-3 text-sm font-semibold text-saffron transition-colors hover:bg-saffron hover:text-saffron-foreground"
            >
              Discover More
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-saffron sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-cream/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Services we offer"
            title="Our Services"
            align="center"
            lead="Innovative solutions across civil construction, solar plant systems, IT support, global trade and workforce management — designed to drive growth and long-term success."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="group overflow-hidden rounded-lg bg-card shadow-card">
                <img
                  src={s.image}
                  alt={s.name}
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-7">
                  <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron"
                  >
                    Learn More
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Reviews"
            title="What clients say about working with us"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-lg border border-border p-7">
                <Quote className="size-6 text-saffron" aria-hidden="true" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-bar">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-saffron-foreground sm:text-3xl">
              Connecting markets. Building trust. Delivering value.
            </h2>
            <p className="mt-2 text-sm text-saffron-foreground/85">
              Share your requirement and our team will respond with a tailored proposal.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream"
          >
            Talk to Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
