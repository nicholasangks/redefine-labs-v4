"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { HoverCircleButton } from "./hover-circle-button";
import { ScrollTextReveal } from "./scroll-text-reveal";
import { Eyebrow } from "./typography";

type Service = {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  video?: string;
  mediaBackground?: string;
  mediaPadding?: string;
  mediaFit?: "cover" | "contain";
};

const services: Service[] = [
  {
    title: "Custom Software",
    description:
      "We work with founders, operators, and growing teams that need thoughtful software, automation, or design systems built with a high level of craft.",
    image: "/images/services/software-1.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "AI Solutions",
    description:
      "We shape interfaces, user journeys, and design systems that make complex software feel focused, credible, and easy to use.",
    image: "/images/clients/ydc.png",
    video: "/images/services/ai.mp4",
    mediaBackground: "#323232",
    mediaFit: "cover",
  },
  {
    title: "Dashboard & Monitoring",
    description:
      "We turn raw data into visual systems that are easier to understand, explain, and act on.",
    image: "/images/services/ems.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "Website Design",
    description:
      "We develop reliable web applications, portals, and internal tools that match how your business actually works.",
    image: "/images/services/t1.png",
    images: [
      "/images/services/website-design-1.png",
      "/images/services/website-design-2.png",
      "/images/services/website-design-3.png",
    ],
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "Product Design",
    description:
      "We develop reliable web applications, portals, and internal tools that match how your business actually works.",
    image: "/images/services/ux.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
];

const websiteServiceIndex = services.findIndex(
  (service) => service.title === "Website Design",
);
const websiteServiceFrames =
  services[websiteServiceIndex]?.images ?? [];
const blurColors = [
  "#F6D49D",
  "#BFCBFF",
  "#D8D2A8",
  "#D7C6FF",
  "#FFD7A6",
];

function ServiceMedia({
  service,
  index,
  websiteFrameIndex,
  className = "",
}: {
  service: Service;
  index: number;
  websiteFrameIndex: number;
  className?: string;
}) {
  const frames = service.images ?? (service.image ? [service.image] : []);
  const currentFrameIndex =
    index === websiteServiceIndex ? websiteFrameIndex : 0;
  const mediaPadding = service.mediaPadding ?? "0";
  const mediaBackground = service.mediaBackground ?? "#ffffff";
  const mediaFitClass =
    service.mediaFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative h-auto aspect-[16/10] overflow-hidden rounded-lg ${className}`}
      style={{ backgroundColor: mediaBackground }}
    >
      {service.video ? (
        <div className="h-full w-full" style={{ padding: mediaPadding }}>
          <video
            src={service.video}
            poster={service.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`h-full w-full ${mediaFitClass}`}
          />
        </div>
      ) : (
        frames.map((frame, frameIndex) => (
          <img
            key={frame}
            src={frame}
            alt={`${service.title} service visual ${frameIndex + 1}`}
            className={`absolute inset-0 h-full w-full ${mediaFitClass} ${
              frameIndex === currentFrameIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ padding: mediaPadding }}
          />
        ))
      )}
    </div>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [websiteFrameIndex, setWebsiteFrameIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const activeService = services[activeIndex];
  const cardGap = 230;
  const blurColor = blurColors[activeIndex] ?? blurColors[0];
  const blurRotation = activeIndex * (360 / services.length);
  const blurOrbitRadius = 35;
  const warmAngle = ((blurRotation - 90) * Math.PI) / 180;
  const blurPosition = {
    top: `${50 + Math.sin(warmAngle) * blurOrbitRadius}%`,
    left: `${50 + Math.cos(warmAngle) * blurOrbitRadius}%`,
  };
  const revealStart = Math.max(activeIndex - 0.22, 0);
  const revealEnd = Math.min(activeIndex + 0.22, services.length - 1);
  const activeTitleProgress =
    revealEnd === revealStart
      ? 1
      : Math.min(
          Math.max((virtualIndex - revealStart) / (revealEnd - revealStart), 0),
          1,
        );
  const sectionStyle = {
    "--services-scroll-height": `${100 + (services.length - 1) * 70}vh`,
  } as CSSProperties;

  useEffect(() => {
    if (activeIndex !== websiteServiceIndex || websiteServiceFrames.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setWebsiteFrameIndex((currentIndex) =>
        (currentIndex + 1) % websiteServiceFrames.length,
      );
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeIndex]);

  useEffect(() => {
    function updateProgress() {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setVirtualIndex(services.length - 1);
        if (activeIndexRef.current !== services.length - 1) {
          activeIndexRef.current = services.length - 1;
          setActiveIndex(services.length - 1);
        }
        return;
      }

      const nextProgress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1,
      );

      setVirtualIndex(nextProgress * (services.length - 1));
      const nextActiveIndex = Math.round(nextProgress * (services.length - 1));

      if (nextActiveIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextActiveIndex;
        setActiveIndex(nextActiveIndex);
      }
    }

    function handleScroll() {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateProgress();
      });
    }

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function scrollToService(index: number) {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    const targetProgress = index / (services.length - 1);
    const targetTop = window.scrollY + rect.top + scrollableDistance * targetProgress;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative px-6 py-20 sm:px-10 lg:h-[var(--services-scroll-height)] lg:px-8 lg:py-0"
      style={sectionStyle}
    >
      <div className="mx-auto flex w-full flex-col lg:hidden">
        <Eyebrow align="center" className="mb-0">
          Services
        </Eyebrow>

        <div className="mt-10 flex flex-col gap-10">
          {services.map((service, index) => (
            <article key={service.title} className="flex flex-col gap-3">
              <ServiceMedia
                service={service}
                index={index}
                websiteFrameIndex={websiteFrameIndex}
                className="w-full mb-1"
              />

              {/* <h2 className="text-[clamp(2rem,10vw,3.2rem)] font-medium leading-none"> */}
              <h2 className="text-[1.3rem] font-medium leading-none">
                {service.title}
              </h2>

              <div>
                <p>{service.description}</p>
                <HoverCircleButton
                  href="mailto:hello@redefinelabs.com"
                  className="mt-3"
                >
                  Explore more
                </HoverCircleButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="hidden lg:sticky lg:top-0 lg:mx-auto lg:block lg:min-h-screen lg:w-full lg:overflow-visible">
        <Eyebrow
          align="center"
          className="md:absolute left-0 right-0 top-20 z-0 mb-0 lg:top-12"
        >
          Services
        </Eyebrow>

        <div className="pointer-events-none absolute top-1/2 left-0 right-0 -translate-y-1/2 h-auto w-[50%] aspect-square mx-auto">
          <div
            className="absolute h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] transition-all duration-700 ease-out"
            style={{
              top: blurPosition.top,
              left: blurPosition.left,
              backgroundColor: blurColor,
              opacity: 0.55,
            }}
          ></div>
        </div>

        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center h-auto lg:w-[60%] xl:w-[50%] 2xl:w-[45%] aspect-square mx-auto rounded-full border border-[#D9D9D9]/80 bg-background">
          <div className="absolute bottom-0 w-auto h-2/3 aspect-square rounded-full border border-[#D9D9D9]/80"></div>
          <div className="absolute top-0 w-px h-full border-r border-dashed border-[#D9D9D9]"></div>
          <div className="absolute -top-2 h-4 w-4 rounded-full border border-[#D9D9D9] bg-[#F6F6F6]"></div>
          <div className="absolute top-[20%] left-[8%] h-4 w-4 rounded-full border border-[#D9D9D9] bg-[#F6F6F6]"></div>
          <div className="absolute top-[20%] right-[8%] h-4 w-4 rounded-full border border-[#D9D9D9] bg-[#F6F6F6]"></div>
        </div>

        <div className="grid min-h-screen w-full items-center gap-8 py-24 lg:grid-cols-[0.8fr_1.4fr_0.8fr] lg:py-32 z-10 relative">
          <div className="flex flex-col items-start gap-3">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => scrollToService(index)}
                  className={`block text-left md:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-medium leading-tight transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : isPassed
                        ? "text-black"
                        : "text-black/30 hover:text-black/60"
                  }`}
                >
                  {isActive ? (
                    <ScrollTextReveal
                      key={`${service.title}-${activeIndex}`}
                      progress={activeTitleProgress}
                      edgeWidth={20}
                    >
                      {service.title}
                    </ScrollTextReveal>
                  ) : (
                    service.title
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative z-20 mx-auto h-auto w-full aspect-[16/10] overflow-visible">
            <div
              className="absolute inset-0 flex flex-col will-change-transform"
              style={{
                gap: `${cardGap}px`,
                transform: `translateY(calc(${-virtualIndex * 100}% - ${virtualIndex * cardGap
                  }px))`,
              }}
            >
              {services.map((service, index) => {
                const isLeftAligned = index % 2 === 0;

                return (
                  <ServiceMedia
                    key={service.title}
                    service={service}
                    index={index}
                    websiteFrameIndex={websiteFrameIndex}
                    className={`w-[85%] flex-none ${
                      isLeftAligned ? "self-start" : "self-end"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-start lg:justify-center">
            <div className="pl-10">
              <p>
                {activeService.description}
              </p>
              <HoverCircleButton
                href="mailto:hello@redefinelabs.com"
                className="mt-6"
              >
                Explore more
              </HoverCircleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
