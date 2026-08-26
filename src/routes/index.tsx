import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Quote, Ship, Truck } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { productCategories } from "@/data/products";
import { heroSlides, tradeCapabilities, tradeProcess, tradeStats } from "@/data/hero";
import { testimonials, whyChooseUs } from "@/data/company";
import shippingImg from "@/assets/shipping.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tricore Ventures — Export & Import of Agri Commodities and Machinery" },
      {
        name: "description",
        content:
          "Tricore Ventures exports Indian rice, sugar, pulses, spices, oils and grains and imports heavy machinery and industrial equipment for buyers across 40+ countries.",
      },
      { property: "og:title", content: "Tricore Ventures — Global Export & Import Partner" },
      {
        property: "og:description",
        content:
          "Farm-direct agricultural commodities, heavy machinery and industrial equipment shipped FOB, CFR and CIF worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden bg-ink">
      {heroSlides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.alt}
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
          {slide?.index} — {slide?.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-cream sm:text-5xl lg:text-6xl">
          {slide?.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">{slide?.lead}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full brand-bar px-7 py-3.5 text-sm font-semibold text-saffron-foreground"
          >
            {slide?.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-saffron hover:text-saffron"
          >
            Catalogue
          </Link>
        </div>

        <div className="mt-14 flex gap-3" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.eyebrow}
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

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3">
          {tradeCapabilities.map((c, i) => (
            <article key={c.title} className="flex gap-4">
              <span className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-saffron">
                {i === 0 ? (
                  <Ship className="size-5" aria-hidden="true" />
                ) : i === 1 ? (
                  <Truck className="size-5" aria-hidden="true" />
                ) : (
                  <Globe2 className="size-5" aria-hidden="true" />
                )}
              </span>
              <div>
                <h2 className="text-lg font-bold text-foreground">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={shippingImg}
            alt="Export containers being loaded for international shipment"
            width={1200}
            height={1400}
            loading="lazy"
            className="h-[420px] w-full rounded-lg object-cover shadow-card lg:h-[520px]"
          />
          <div>
            <SectionHeading
              eyebrow="Your trusted partner"
              title="10+ Years of Expertise in Import, Export and Global Trade"
              lead="Tricore Ventures is an India-based import and export house connecting global buyers with farm-direct agricultural commodities — rice, sugar, pulses, grains, spices, seeds and edible oils — alongside heavy machinery, construction plant and industrial equipment. We handle sourcing, quality control, custom packing, documentation and shipping so your consignment lands exactly as contracted."
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
          {tradeStats.map((s) => (
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
            eyebrow="What we export & import"
            title="Our Product Range"
            align="center"
            lead="Farm-direct agricultural and food commodities packed for retail or bulk export, plus imported machinery and industrial equipment — every category shipped to agreed specification."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <article key={c.id} className="group overflow-hidden rounded-lg bg-card shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.label}
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-cream">
                    {c.products.length} products
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-foreground">{c.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron"
                  >
                    View Products
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
            eyebrow="How we ship"
            title="Our Export Process — Enquiry to Delivery"
            align="center"
            lead="A transparent, documented trade cycle so buyers know exactly what happens at every stage."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tradeProcess.map((p) => (
              <li key={p.step} className="rounded-lg border border-border p-7 transition-colors hover:border-saffron">
                <span className="font-display text-3xl font-extrabold text-saffron/40">{p.step}</span>
                <h3 className="mt-3 text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Reviews" title="What clients say about working with us" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-lg border border-border bg-card p-7">
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
              Send us your product, quantity and destination port — we will respond with a full export offer.
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
