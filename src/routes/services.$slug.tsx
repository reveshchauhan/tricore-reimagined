import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const description = service.summary;
    return {
      meta: [
        { title: `${service.name} — Tricore Ventures` },
        { name: "description", content: description },
        { property: "og:title", content: `${service.name} — Tricore Ventures` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={service.image}
          alt={service.name}
          width={1600}
          height={900}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-32">
          <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">
            {service.index} — {service.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-cream sm:text-5xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80">{service.heroLead}</p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full brand-bar px-7 py-3.5 text-sm font-semibold text-saffron-foreground"
          >
            {service.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2">
        <SectionHeading eyebrow="Overview" title={`About our ${service.name.toLowerCase()}`} lead={service.overview} />
        <ul className="grid gap-3 self-center">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-2.5 rounded-md bg-cream px-5 py-4 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brandgreen" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Explore more" title="Other services" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {others.map((s) => (
              <article key={s.slug} className="overflow-hidden rounded-lg bg-card shadow-card">
                <img
                  src={s.image}
                  alt={s.name}
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-base font-bold">{s.name}</h3>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-saffron"
                  >
                    View Details
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
