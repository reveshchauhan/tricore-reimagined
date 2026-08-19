import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { productCategories } from "@/data/products";
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

        <TooltipProvider delayDuration={120}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {current?.products.map((product) => (
              <li key={product.slug}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-full cursor-help rounded-md border border-border bg-card px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:border-saffron hover:text-saffron focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {product.name}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="font-semibold">{product.name}</p>
                    <p className="mt-1 text-xs leading-relaxed opacity-90">{product.description}</p>
                    <p className="mt-1.5 text-xs opacity-75">
                      Suitable for retail packing and bulk export · packing and specification to buyer requirement.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>

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
