import type { ReactNode } from "react";

type HeadingSize = "hero" | "section" | "card" | "faq";
type HeadingAlign = "left" | "center";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

type HeadingProps = {
  as?: HeadingTag;
  size?: HeadingSize;
  align?: HeadingAlign;
  className?: string;
  children: ReactNode;
};

type EyebrowProps = {
  as?: "p" | "span";
  align?: HeadingAlign;
  className?: string;
  children: ReactNode;
};

const headingSizeClasses: Record<HeadingSize, string> = {
  // hero: "text-[clamp(2.6rem,3.15vw,3.05rem)] leading-[1]",
  hero: "text-[1.95rem] md:text-[2.6rem] xl:text-[2.95rem] 2xl:text-[3.2rem] leading-[1.1] 2xl:leading-[1.05]",
  section: "text-[1.6rem] md:text-[2.2rem] xl:text-[2.3rem] 2xl:text-[2.6rem] leading-[1.2]",
  card: "text-[1.5rem] 2xl:text-[1.8rem]",
  faq: "text-[1.2rem] leading-tight",
};

const alignmentClasses: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
};

export function Heading({
  as,
  size = "section",
  align = "left",
  className = "",
  children,
}: HeadingProps) {
  const Component = as ?? "h2";

  return (
    <Component
      className={`font-medium ${headingSizeClasses[size]} ${alignmentClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
}

export function Eyebrow({
  as = "p",
  align = "left",
  className = "",
  children,
}: EyebrowProps) {
  const Component = as;

  return (
    <Component
      className={`mb-3 text-[10px] 2xl:text-[11.5px] tracking-[0.5px] uppercase text-muted-foreground font-medium ${alignmentClasses[align]} ${className}`}
    >
      {children}
    </Component>
  );
}
