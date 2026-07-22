"use client";

import { useEffect, useRef, useState } from "react";

import { Eyebrow, Heading } from "./typography";

const processSteps = [
  {
    title: "Discover",
    description:
      "We start by understanding your business, users, constraints, and the real problem worth solving.",
  },
  {
    title: "Define",
    description:
      "We shape the scope, priorities, and execution plan so the direction is clear before work begins.",
  },
  {
    title: "Build",
    description:
      "We design and engineer the system with attention to usability, performance, and long-term maintainability.",
  },
  {
    title: "Refine",
    description:
      "We iterate based on feedback, improve what matters, and help the product continue to evolve after launch.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const mobileStepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleMobileSteps, setVisibleMobileSteps] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateActiveStep() {
      const section = sectionRef.current;

      if (!section || !desktopQuery.matches) {
        return;
      }

      if (reduceMotion.matches) {
        setActiveIndex(processSteps.length - 1);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        return;
      }

      const progress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1,
      );
      const nextIndex = Math.min(
        Math.floor(progress * processSteps.length),
        processSteps.length - 1,
      );

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    }

    function handleScroll() {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateActiveStep();
      });
    }

    updateActiveStep();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    desktopQuery.addEventListener("change", handleScroll);
    reduceMotion.addEventListener("change", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      desktopQuery.removeEventListener("change", handleScroll);
      reduceMotion.removeEventListener("change", handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      const motionFrame = window.requestAnimationFrame(() => {
        setVisibleMobileSteps(new Set(processSteps.map((_, index) => index)));
      });

      return () => window.cancelAnimationFrame(motionFrame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number((entry.target as HTMLElement).dataset.stepIndex);
          setVisibleMobileSteps((currentSteps) => {
            const nextSteps = new Set(currentSteps);
            nextSteps.add(index);
            return nextSteps;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    mobileStepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => observer.disconnect();
  }, []);

  function copyState(index: number) {
    if (index === activeIndex) {
      return "translate-y-0 opacity-100";
    }

    if (index < activeIndex) {
      return "translate-y-0 opacity-100";
    }

    return "translate-y-3 opacity-0";
  }

  function ovalState(index: number) {
    if (index === activeIndex) {
      return "translate-y-0 scale-x-100 opacity-100";
    }

    if (index < activeIndex) {
      return "translate-y-0 scale-x-100 opacity-100";
    }

    return "translate-y-4 scale-x-[0.86] opacity-0";
  }

  function connectorState(index: number) {
    return index <= activeIndex
      ? "scale-x-100 opacity-100"
      : "scale-x-0 opacity-0";
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-10 md:h-[280vh] md:px-8 md:py-0 2xl:px-12"
    >
      <div className="space-y-5 md:hidden">
        <div className="mb-8 text-center">
          <Eyebrow align="center">Our process</Eyebrow>
          <Heading as="h2" size="section" className="!text-center">
            How we work
          </Heading>
        </div>

        {processSteps.map((step, index) => {
          const isVisible = visibleMobileSteps.has(index);

          return (
            <article
              key={step.title}
              ref={(node) => {
                mobileStepRefs.current[index] = node;
              }}
              data-step-index={index}
              className={`flex gap-4 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div
                className={`mt-1 h-8 w-18 shrink-0 rounded-full border border-black/30 transition-transform duration-700 ${
                  isVisible ? "scale-x-100" : "scale-x-50"
                }`}
              />
              <div className="space-y-0">
                <Heading as="h3" size="card">
                  <span className="mb-0.5 block text-[0.55em] font-normal text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </Heading>
                <p className="-mt-1 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hidden md:sticky md:top-0 md:flex md:min-h-screen md:flex-col md:justify-center">
        <div className="mb-4 text-center md:mb-8">
          <Eyebrow align="center">Our process</Eyebrow>
          <Heading as="h2" size="section" className="!text-center">
            How we work
          </Heading>
        </div>

        <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(420px,560px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(520px,660px)_minmax(0,1fr)]">
          <div className="relative h-[34rem]">
            <article
              className={`absolute right-0 top-[13rem] flex w-full items-start justify-end pr-[4.75rem] transition-all duration-500 ${copyState(1)}`}
            >
              <div className="max-w-[15rem] 2xl:max-w-[18rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    02
                  </span>
                  {processSteps[1].title}
                </Heading>
                <p className="-mt-5 max-w-[15rem] 2xl:max-w-[18rem]">
                  {processSteps[1].description}
                </p>
              </div>
            </article>

            <article
              className={`absolute right-0 top-[24.5rem] flex w-full items-start justify-end pr-[4.75rem] transition-all duration-500 ${copyState(3)}`}
            >
              <div className="max-w-[15rem] 2xl:max-w-[18rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-1 block text-[13px] text-muted-foreground">
                    04
                  </span>
                  {processSteps[3].title}
                </Heading>
                <p className="-mt-5 max-w-[15rem] 2xl:max-w-[18rem]">
                  {processSteps[3].description}
                </p>
              </div>
            </article>
          </div>

          <div className="relative h-[34rem]">
            <div
              className={`absolute left-1/2 top-0 z-50 h-[13rem] w-px origin-top -translate-x-1/2 bg-black/30 transition-transform duration-700 ${
                activeIndex >= 0 ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <div
              className={`absolute left-1/2 top-[14.5rem] z-0 h-[14.25rem] w-px origin-top -translate-x-1/2 bg-black/30 transition-transform duration-700 ${
                activeIndex >= 2 ? "scale-y-100" : "scale-y-0"
              }`}
            />

            <div
              className={`absolute left-1/2 top-[3rem] z-40 h-[8.5rem] w-full -translate-x-1/2 rounded-[50%] border border-black/30 transition-all duration-700 ease-out ${ovalState(0)}`}
            />
            <div
              className={`absolute left-1/2 top-[8.75rem] z-30 h-[8.5rem] w-[88%] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(180deg,rgba(145,187,252,0.3)_0%,rgba(253,210,157,0.35)_100%)] backdrop-blur-xs transition-all duration-700 ease-out ${ovalState(1)}`}
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className={`absolute left-1/2 top-[14.5rem] z-20 h-[8.5rem] w-[72%] -translate-x-1/2 overflow-visible text-black/30 transition-all duration-700 ease-out ${ovalState(2)}`}
            >
              <ellipse
                cx="50"
                cy="50"
                rx="49.8"
                ry="49.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="10 4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div
              className={`absolute left-1/2 top-[20.25rem] z-10 h-[8.5rem] w-[58%] -translate-x-1/2 rounded-[50%] border border-black/30 transition-all duration-700 ease-out ${ovalState(3)}`}
            />

            <div
              className={`absolute -right-14 top-[7.25rem] h-px w-14 origin-left bg-black/30 transition-all duration-500 ${connectorState(0)}`}
            />
            <div
              className={`absolute -left-14 top-[13rem] h-px w-[calc(6%+3.5rem)] origin-right bg-black/30 transition-all duration-500 ${connectorState(1)}`}
            />
            <div
              className={`absolute -right-14 top-[18.75rem] h-px w-[calc(14%+3.5rem)] origin-left bg-black/30 transition-all duration-500 ${connectorState(2)}`}
            />
            <div
              className={`absolute -left-14 top-[24.5rem] h-px w-[calc(21%+3.5rem)] origin-right bg-black/30 transition-all duration-500 ${connectorState(3)}`}
            />
          </div>

          <div className="relative h-[34rem]">
            <article
              className={`absolute left-0 top-[7.25rem] flex w-full items-start pl-[4.75rem] transition-all duration-500 ${copyState(0)}`}
            >
              <div className="max-w-[15rem] 2xl:max-w-[18rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    01
                  </span>
                  {processSteps[0].title}
                </Heading>
                <p className="-mt-5 ml-auto max-w-[15rem] 2xl:max-w-[18rem]">
                  {processSteps[0].description}
                </p>
              </div>
            </article>

            <article
              className={`absolute left-0 top-[18.75rem] flex w-full items-start pl-[4.75rem] transition-all duration-500 ${copyState(2)}`}
            >
              <div className="max-w-[15rem] 2xl:max-w-[18rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    03
                  </span>
                  {processSteps[2].title}
                </Heading>
                <p className="-mt-5 ml-auto max-w-[15rem] 2xl:max-w-[18rem]">
                  {processSteps[2].description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
