"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type HoverCircleButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showHoverCircle?: boolean;
};

export function HoverCircleButton({
  href,
  children,
  className = "",
  showHoverCircle = true,
}: HoverCircleButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex h-9 items-center overflow-visible rounded-full bg-black px-4 uppercase text-[11px] 2xl:text-[11.5px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 ${className}`}
    >
      <span className="relative mt-[1px] tracking-[0.5px] z-10">
        {children}
      </span>

      {showHoverCircle && (
        <span
          className="pointer-events-none absolute top-1/2 right-[-2rem] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
        >
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="absolute inset-0 z-10 h-full w-full -rotate-90"
            fill="none"
          >
            <circle
              cx="24"
              cy="24"
              r="22.5"
              className="stroke-white/60 [stroke-dasharray:141.4] [stroke-dashoffset:141.4] transition-[stroke-dashoffset] duration-280 ease-out group-hover:[stroke-dashoffset:0]"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_28%_30%,rgba(253,210,157,0.8),rgba(145,187,252,0.4)_34%,rgba(145,187,252,0.2)_60%,rgba(253,210,157,0.4)_100%)] shadow-[inset_255_255_10px_rgba(255,255,255,.6)] [backdrop-filter:blur(6px)_saturate(30%)] opacity-0 transition-opacity duration-180 ease-out delay-180 group-hover:opacity-100" />
          <ArrowUpRight className="relative z-20 h-4 w-4 scale-75 text-black opacity-0 transition-[opacity,transform] duration-180 ease-out delay-[240ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-100 group-hover:opacity-100" strokeWidth={2.4} />
        </span>
      )}
    </a>
  );
}
