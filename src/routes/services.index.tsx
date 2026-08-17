import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Construction, Solar, IT, Trade | Tricore Ventures" },
      {
        name: "description",
        content:
          "Six service lines from Tricore Ventures: civil construction, solar plant systems, IT support, import-export, work contract services and commodity trading.",
      },
      { property: "og:title", content: "Tricore Ventures Services" },
      {
        property: "og:description",
        content: "Construction, solar energy, IT support, global trade, workforce and trading services.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">What we do</p>
          <h1 className="mt-5 text-4xl font-extrabold text-cream sm:text-5xl">Our Services</h1>
          <p className="mt-5 max-w-2xl text-base text-cream/75">
            Six specialised divisions under one accountable team — engineered delivery, transparent
            commercials and dependable timelines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Service lines"
          title="Choose the capability you need"
          lead="Each division operates with dedicated specialists, documented processes and a single point of contact."
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
                <p className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase">{s.index}</p>
                <h2 className="mt-2 text-lg font-bold">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron"
                >
                  View Details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
