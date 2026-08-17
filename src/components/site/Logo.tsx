import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Tricore Ventures home">
      <span className="grid size-11 shrink-0 place-items-center rounded-md brand-bar">
        <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
          <path d="M16 3 3 27h26L16 3Z" fill="none" stroke="white" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M16 12v11M11 23v-6M21 23v-8" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-extrabold tracking-tight">
          <span className="text-saffron">TRICORE</span>{" "}
          <span className={inverted ? "text-cream" : "text-brandgreen"}>VENTURES</span>
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.18em] ${
            inverted ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          YOUR VISION. OUR EXPERTISE.
        </span>
      </span>
    </Link>
  );
}
