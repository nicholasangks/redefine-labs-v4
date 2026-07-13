import type { ReactNode } from "react";

type SectionSpacing = "default" | "none";

type SectionProps = {
  id?: string;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-10 md:py-34",
  none: "py-0",
};

export function Section({
  id,
  spacing = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 md:px-8 2xl:px-12 ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
