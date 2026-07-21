import { HoverCircleButton } from "../components/hover-circle-button";
import { ScrollTextReveal } from "../components/scroll-text-reveal";
import { Section } from "../components/section";
import { Eyebrow, Heading } from "../components/typography";
import { createPageMetadata } from "../seo";

const description =
  "Learn how Redefine Labs combines product thinking, software engineering, and practical AI to build digital products that work for businesses and their users.";

export const metadata = createPageMetadata({
  title: "About",
  description,
  path: "/about",
});

const values = [
  {
    title: "Business-driven",
    description:
      "Every build is shaped by your goals and workflows, not by what's technically interesting to us.",
    image: "/images/value-1.webp",
  },
  {
    title: "AI applied practically",
    description:
      "We use AI where it removes real friction — not as a buzzword bolted onto a feature list.",
    image: "/images/value-2.webp",
  },
  {
    title: "Engineered to last",
    description:
      "Client-owned infrastructure, clean architecture, and interfaces people don't need a manual for. Built to outlive any one developer — including us.",
    image: "/images/value-3.webp",
  },
];

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

export default function AboutPage() {
  return (
    <main>
      <Section
        spacing="none"
        className="relative h-[700px] mx-auto flex flex-col items-center justify-center"
      >
        <div className="pointer-events-none absolute inset-0 w-[75%] max-w-[900px] mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full h-auto w-[35%] aspect-square bg-[#FDD29D]/40 blur-[100px]" />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto rounded-full h-auto w-[35%] aspect-square bg-[#91BBFC]/40 blur-[100px]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full h-auto w-[35%] aspect-square bg-[#FDD29D]/40 blur-[100px]" />
        </div>

        <div className="relative z-10 flex max-w-[600px] flex-col items-center px-2 text-center">
          <div className="mb-12 flex h-30 w-30 items-center justify-center rounded-[2rem] bg-white shadow-[0_18px_55px_rgba(145,187,252,0.2)] rotate-45">
            <div className="-rotate-45">
              <img
                src="/images/brand-assets/logo.png"
                alt="Redefine Labs"
                className="h-auto w-[40%] object-contain mx-auto"
              />
            </div>
          </div>

          <Heading
            as="h1"
            size="hero"
            className="text-balance !text-center"
          >
            {/* Engineering digital products through product thinking, software, and AI  */}
            {/* Engineering products that balance business & technology */}
                Engineering Better Digital Products.
            {/* Software and AI engineered for scale, performance, and ease of use */}
          </Heading>

          <HoverCircleButton href="/#services" className="mt-4">
            Explore services
          </HoverCircleButton>
        </div>
      </Section>

      <Section spacing="default" className="mx-auto !pt-20">
        <Eyebrow>Who we are</Eyebrow>
        <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-40">
          <div className="max-w-[600px]">
            <Heading size="section">
              <ScrollTextReveal>
                Redefine Labs is a software and AI engineering company helping businesses build better digital products.
              </ScrollTextReveal>
            </Heading>
          </div>

          <div className="flex justify-end">
            <p className="max-w-2xl">
              We believe great software is more than clean code or beautiful interfaces. It should simplify complexity, improve the way people work, and deliver lasting business value.
              Every project begins with understanding your business, users, and objectives before engineering solutions that are scalable, reliable, and built to grow.
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="default" className="mx-auto">
        <div className="mb-4 text-center md:mb-8">
          <Eyebrow align="center">Our process</Eyebrow>
          <Heading as="h2" size="section" className="!text-center">
            How we work
          </Heading>
        </div>
        <div className="space-y-5 md:hidden">
          {processSteps.map((step, index) => (
            <article key={step.title} className="flex gap-4">
              <div className="mt-1 h-8 w-18 rounded-full border border-black/30" />
              <div className="space-y-0">
                <Heading as="h3" size="card">
                  <span className="mb-0.5 block text-[0.55em] font-normal text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </Heading>
                <p className="-mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden w-full grid-cols-[minmax(0,1fr)_minmax(420px,560px)_minmax(0,1fr)] md:grid">
          <div className="relative h-[34rem]">
            <article className="absolute right-0 top-[13rem] flex w-full items-start justify-end">
              <div className="max-w-[15rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    02
                  </span>
                  {processSteps[1].title}
                </Heading>
                <p className="-mt-5 max-w-[15rem] text-muted-foreground">
                  {processSteps[1].description}
                </p>
              </div>
              <div className="ml-5 h-px w-14 shrink-0 bg-black/30" />
            </article>

            <article className="absolute right-0 top-[24.5rem] flex w-full items-start justify-end">
              <div className="max-w-[15rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-1 block text-[13px] text-muted-foreground">
                    04
                  </span>
                  {processSteps[3].title}
                </Heading>
                <p className="-mt-5 max-w-[15rem] text-muted-foreground">
                  {processSteps[3].description}
                </p>
              </div>
              <div className="ml-5 h-px w-14 shrink-0 bg-black/30" />
            </article>
          </div>

          <div className="relative h-[34rem]">
            <div className="absolute left-1/2 top-0 z-50 h-[13rem] w-px -translate-x-1/2 bg-black/30" />
            <div className="absolute left-1/2 top-[14.5rem] z-0 h-[14.25rem] w-px -translate-x-1/2 bg-black/30" />
            {/* <div className="absolute left-1/2 top-[12rem] h-32 w-32 -translate-x-1/2 rounded-full bg-[#91BBFC]/25 blur-[48px]" /> */}
            {/* <div className="absolute left-1/2 top-[17rem] h-28 w-28 -translate-x-1/2 rounded-full bg-[#FDD29D]/30 blur-[44px]" /> */}

            <div className="absolute left-1/2 top-[3rem] z-40 h-[8.5rem] w-full -translate-x-1/2 rounded-[50%] border border-black/30" />
            <div className="absolute left-1/2 top-[8.75rem] z-30 h-[8.5rem] w-[88%] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(180deg,rgba(145,187,252,0.3)_0%,rgba(253,210,157,0.35)_100%)] backdrop-blur-xs" />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute left-1/2 top-[14.5rem] z-20 h-[8.5rem] w-[72%] -translate-x-1/2 overflow-visible text-black/30"
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
            <div className="absolute left-1/2 top-[20.25rem] z-10 h-[8.5rem] w-[58%] -translate-x-1/2 rounded-[50%] border border-black/30" />

            <div className="absolute left-0 top-[13rem] h-px w-[6%] bg-black/30" />
            <div className="absolute right-0 top-[18.75rem] h-px w-[14%] bg-black/30" />
            <div className="absolute left-0 top-[24.5rem] h-px w-[21%] bg-black/30" />
          </div>

          <div className="relative h-[34rem]">
            <article className="absolute left-0 top-[7.25rem] flex w-full items-start">
              <div className="mr-5 h-px w-14 shrink-0 bg-black/30" />
              <div className="max-w-[15rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    01
                  </span>
                  {processSteps[0].title}
                </Heading>
                <p className="-mt-5 ml-auto max-w-[15rem] text-muted-foreground">
                  {processSteps[0].description}
                </p>
              </div>
            </article>

            <article className="absolute left-0 top-[18.75rem] flex w-full items-start">
              <div className="mr-5 h-px w-14 shrink-0 bg-black/30" />
              <div className="max-w-[15rem]">
                <Heading as="h3" size="card" className="-translate-y-1/2">
                  <span className="mb-0.5 block text-[13px] text-muted-foreground">
                    03
                  </span>
                  {processSteps[2].title}
                </Heading>
                <p className="-mt-5 ml-auto max-w-[15rem] text-muted-foreground">
                  {processSteps[2].description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section
        spacing="default"
        className="relative mx-auto max-w-[1000px]"
      >
        <div className="absolute top-0 left-0 -z-10 flex h-full w-full justify-between">
          <div className="aspect-square h-auto w-1/2 bg-[#91BBFC]/30 blur-[100px]" />
          <div className="aspect-square h-auto w-1/2 bg-[#FDD29D]/30 blur-[100px]" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-0">
          <div className="space-y-4 text-center md:pr-8">
            <Heading as="h2" size="section" align="center">
              Mission
            </Heading>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              To help businesses build digital products that are useful,
              reliable, and grounded in how their teams and customers actually
              work.
            </p>
          </div>

          <div className="space-y-4 pt-8 text-center md:border-l md:border-t-0 md:border-border md:pt-0 md:pl-8">
            <Heading as="h2" size="section" align="center">
              Vision
            </Heading>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A future where software, AI, and design are applied with clarity
              and restraint, making businesses more effective without adding
              unnecessary complexity.
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="default" className="mx-auto">
        <Eyebrow>Our Values</Eyebrow>
        <Heading size="section" className="max-w-[560px]">
          Principles that keep our work practical and durable.
        </Heading>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="flex flex-col overflow-hidden rounded-lg border border-border"
            >
              {value.image ? (
                <img
                  src={value.image}
                  alt={value.title}
                  className="aspect-[4/2] h-auto w-full object-cover"
                />
              ) : (
                <div className="aspect-[4/2] h-auto w-full bg-gray-200" />
              )}
              <div className="space-y-2 p-5">
                <Heading as="h3" size="card">
                  {value.title}
                </Heading>
                <p className="max-w-[15rem] text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

    </main>
  );
}
