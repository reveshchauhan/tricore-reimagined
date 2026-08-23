import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package, Globe, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

import { productCategories, type Product } from "@/data/products";
import productsImg from "@/assets/products-flatlay.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Rice, Pulses, Spices & Commodities | Tricore Ventures" },
      {
        name: "description",
        content:
          "Export catalogue of Indian agricultural and food commodities: basmati and non-basmati rice, sugar, pulses, grains, spices, seeds and nuts.",
      },
      { property: "og:title", content: "Tricore Ventures Product Catalogue" },
      {
        property: "og:description",
        content: "Rice, sugar, pulses, grains, spices, seeds and nuts sourced for global buyers.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState(productCategories[0]?.id ?? "rice");
  const current = productCategories.find((c) => c.id === active) ?? productCategories[0];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={productsImg}
          alt="Indian agricultural commodities in bowls"
          width={1600}
          height={900}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">
            Agricultural & Food Commodities
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold text-cream sm:text-5xl">
            From Farm to the World
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80">
            Packing, quantity, specifications and destination requirements are always agreed to buyer needs.
            Quality, consistency and competitive commercials on every consignment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="Our products" title="Explore the catalogue" lead={current?.blurb ?? ""} />

        <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Product categories">
          {productCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={c.id === active}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                c.id === active
                  ? "brand-bar text-saffron-foreground"
                  : "border border-border text-muted-foreground hover:text-saffron"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {current ? (
          <div className="mt-10 grid gap-8 overflow-hidden rounded-xl border border-border bg-card shadow-card lg:grid-cols-2">
            <img
              src={current.image}
              alt={current.label}
              width={1200}
              height={800}
              loading="lazy"
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="p-8">
              <h2 className="font-display text-2xl font-extrabold text-foreground">{current.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.intro}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-saffron">Origins</dt>
                  <dd className="mt-1 text-muted-foreground">{current.origin}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-saffron">Packing options</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {current.packing.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ) : null}

        <p className="mt-10 text-sm text-muted-foreground">
          Hover any product to see its description, specifications and export details.
        </p>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current?.products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </ul>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">Need a quotation or product specification?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us your requirement with quantity, grade and destination port.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full brand-bar px-7 py-3.5 text-sm font-semibold text-saffron-foreground"
          >
            Request a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="group relative flex flex-col"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="w-full rounded-md border border-border bg-card px-5 py-4 text-left text-sm font-semibold text-foreground transition-colors hover:border-saffron hover:text-saffron focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {product.name}
      </button>

      <div
        className={`z-10 mt-2 overflow-hidden rounded-lg border border-saffron/20 bg-cream p-4 shadow-lg transition-all duration-300 ease-out ${
          open ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <h3 className="text-base font-bold text-foreground">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        {product.specs.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-saffron">Key specifications</p>
            <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="font-medium text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {product.applications.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.applications.slice(0, 3).map((app) => (
              <span
                key={app}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-[10px] font-medium text-foreground"
              >
                <Leaf className="size-3 text-leaf" aria-hidden="true" />
                {app}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Package className="size-3.5 text-saffron" aria-hidden="true" />
            Retail packing & bulk export available
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe className="size-3.5 text-navy" aria-hidden="true" />
            Specifications matched to buyer destination
          </span>
        </div>
      </div>
    </li>
  );
}
