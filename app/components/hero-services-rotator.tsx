"use client";

import { useEffect, useMemo, useState } from "react";

type HeroServicesRotatorProps = {
  services: string[];
  interval?: number;
};

export function HeroServicesRotator({
  services,
  interval = 2000,
}: HeroServicesRotatorProps) {
  const [position, setPosition] = useState(services.length);
  const [shouldTransition, setShouldTransition] = useState(true);
  const repeatedServices = useMemo(
    () => [...services, ...services, ...services],
    [services],
  );
  const activeIndex = services.length > 0 ? position % services.length : 0;

  useEffect(() => {
    if (services.length < 2) return;

    const timer = window.setInterval(() => {
      setPosition((current) => current + 1);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, services.length]);

  function handleTransitionEnd(event: React.TransitionEvent<HTMLUListElement>) {
    if (event.target !== event.currentTarget || position < services.length * 2) {
      return;
    }

    setShouldTransition(false);
    setPosition(services.length);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setShouldTransition(true));
    });
  }

  if (services.length === 0) return null;

  return (
    <div
      className="relative order-3 mx-auto h-8 w-full overflow-hidden text-center text-[1rem] font-normal md:order-none md:h-32 md:w-full md:text-[1.1rem] xl:text-[1.2rem]"
      aria-label="Services"
    >
      <span className="sr-only">{services[activeIndex]}</span>
      <ul
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 flex w-full flex-col ${
          shouldTransition
            ? "transition-transform duration-700 ease-in-out"
            : ""
        } [transform:translateY(calc(var(--service-position)*-2rem))] md:[transform:translateY(calc(2.75rem-var(--service-position)*2.5rem))]`}
        style={
          {
            "--service-position": position,
          } as React.CSSProperties
        }
        onTransitionEnd={handleTransitionEnd}
      >
        {repeatedServices.map((service, index) => {
          const isActive = index % services.length === activeIndex;

          return (
            <li
              key={`${service}-${index}`}
              className={`flex h-8 shrink-0 items-center justify-center transition-[color,opacity] duration-500 ease-out md:h-10 ${
                isActive
                  ? "text-foreground opacity-100"
                  : "text-foreground opacity-0 md:opacity-30"
              }`}
            >
              {service}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
