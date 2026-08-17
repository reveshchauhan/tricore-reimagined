export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase">{eyebrow}</p>
      ) : null}
      <As className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">{title}</As>
      <span
        className={`mt-4 block h-1 w-16 rounded-full brand-bar ${align === "center" ? "mx-auto" : ""}`}
      />
      {lead ? <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </div>
  );
}
