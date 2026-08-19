import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/tricore-logo.png.asset.json";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Tricore Ventures home">
      <span
        className={`grid size-12 shrink-0 place-items-center overflow-hidden rounded-md ${
          inverted ? "bg-cream" : "bg-background"
        }`}
      >
        <img
          src={logoAsset.url}
          alt="Tricore Ventures logo"
          className="size-12 object-contain"
          width={48}
          height={48}
          loading="eager"
        />
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
