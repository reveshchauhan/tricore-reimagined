import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Globe2, Mail, Phone, ShieldCheck, Truck } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  approach,
  commitments,
  company,
  industries,
  leadership,
  whyChooseUs,
} from "@/data/company";
import tradeImg from "@/assets/service-trade.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tricore Ventures — Import, Export & Trading Company" },
      {
        name: "description",
        content:
          "Tricore Ventures connects global markets with quality Indian produce and industrial goods through dependable sourcing, transparent commercials and long-term partnerships.",
      },
      { property: "og:title", content: "About Tricore Ventures" },
      {
        property: "og:description",
        content: "A decade of expertise in global sourcing, delivery and trusted partnerships.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Globe2, title: "Import", text: "Global sourcing and dependable procurement." },
  { icon: Truck, title: "Export", text: "International delivery and market access." },
  { icon: ShieldCheck, title: "Trading", text: "Trusted partnerships and commercial solutions." },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={tradeImg}
          alt="Container port at sunset"
          width={1600}
          height={900}
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-32">
          <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">
            Import · Export · Trading
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-cream sm:text-5xl">
            Connecting Markets. Building Trust. Delivering Value.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80">
            Tricore Ventures is a dynamic import, export and trading company committed to delivering
            world-class products with integrity, reliability and excellence — bringing the best of India to
            the global market.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-border p-8">
              <p.icon className="size-7 text-saffron" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why choose us" title="Built on quality and transparency" />
            <ul className="mt-8 space-y-3">
              {whyChooseUs.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brandgreen" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Our approach" title="How we work with partners" />
            <ul className="mt-8 space-y-3">
              {approach.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-saffron" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="Leadership" title="Our Leadership Team" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {leadership.map((l) => (
            <div key={l.name} className="rounded-lg border border-border p-8 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full brand-bar font-display text-lg font-extrabold text-saffron-foreground">
                {l.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <h3 className="mt-5 text-lg font-bold">{l.name}</h3>
              <p className="text-sm text-saffron">{l.role}</p>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${l.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 hover:text-saffron"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {l.phone}
                </a>
                <a
                  href={`mailto:${l.email}`}
                  className="flex items-center justify-center gap-2 hover:text-saffron"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {l.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-cream">Our Commitment</h2>
            <span className="mt-4 block h-1 w-16 rounded-full brand-bar" />
            <ul className="mt-8 space-y-3 text-sm text-cream/75">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-saffron" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-cream">Industries We Serve</h2>
            <span className="mt-4 block h-1 w-16 rounded-full brand-bar" />
            <ul className="mt-8 flex flex-wrap gap-3">
              {industries.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/80"
                >
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-cream/60">{company.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
