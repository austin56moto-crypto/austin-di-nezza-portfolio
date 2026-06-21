type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="editorial-kicker mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="editorial-title max-w-4xl text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="editorial-copy mt-5 max-w-3xl text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
