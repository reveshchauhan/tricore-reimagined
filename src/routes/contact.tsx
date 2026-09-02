import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ReceiptText } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company, leadership } from "@/data/company";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tricore Ventures — Gurugram, India" },
      {
        name: "description",
        content:
          "Contact Tricore Ventures in Gurugram for construction, solar, IT support, import-export, contract staffing and commodity trading enquiries.",
      },
      { property: "og:title", content: "Contact Tricore Ventures" },
      {
        property: "og:description",
        content: "Send your requirement and our team will respond with a tailored proposal.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — your enquiry has been noted.", {
        description: "Our team will get back to you shortly.",
      });
    }, 600);
  };

  return (
    <>
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase">Get in touch</p>
          <h1 className="mt-5 text-4xl font-extrabold text-cream sm:text-5xl">Feel Free to Contact Us</h1>
          <p className="mt-5 max-w-2xl text-base text-cream/75">
            Tell us what you need — product, quantity, destination or project scope — and we will respond
            with clear commercials.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-4 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Reach us" title="Office & contacts" />
          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-saffron" aria-hidden="true" />
              <span className="text-muted-foreground">{company.address}</span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-saffron" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {company.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="text-muted-foreground hover:text-saffron">
                    {e}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-4">
              <Phone
                className="mt-0.5 size-5 shrink-0 text-saffron"
                aria-hidden="true"
              />

              <span className="flex flex-col gap-1">
                {leadership.map((l) => (
                  <a
                    key={l.phone}
                    href={`tel:${l.phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground hover:text-saffron"
                  >
                    {l.phone} — {l.name}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center gap-2 text-muted-foreground">
                  <ReceiptText
                    className="size-5 shrink-0 text-saffron"
                    aria-hidden="true"
                  />
                  <span>GST: 06AAYFT8267E1ZG</span>
                </span>
            </li>

          </ul>

          <div className="mt-10 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Tricore Ventures office location"
              src="https://www.google.com/maps?q=India%20Accelerator%20Udyog%20Vihar%20Phase%204%20Gurugram&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-lg border border-border p-8 shadow-card">
          <h2 className="text-2xl font-extrabold">Send an enquiry</h2>
          <span className="mt-3 block h-1 w-16 rounded-full brand-bar" />
          <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Full name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-saffron"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-saffron"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Phone
                <input
                  name="phone"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-saffron"
                  placeholder="+91 00000 00000"
                />
              </label>
              <label className="text-sm font-medium">
                Service type
                <select
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-saffron"
                >
                  <option value="" disabled>
                    Choose service type
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="text-sm font-medium">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-saffron"
                placeholder="Product, quantity, destination or project details"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="justify-self-start rounded-full brand-bar px-8 py-3.5 text-sm font-semibold text-saffron-foreground disabled:opacity-70"
            >
              {submitting ? "Sending…" : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
