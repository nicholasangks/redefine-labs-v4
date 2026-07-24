import { HoverCircleButton } from "../components/hover-circle-button";
import { JsonLd } from "../components/json-ld";
import { ProcessSection } from "../components/process-section";
import { ScrollTextReveal } from "../components/scroll-text-reveal";
import { Section } from "../components/section";
import { Eyebrow, Heading } from "../components/typography";
import { createPageMetadata } from "../seo";
import { siteConfig } from "../site-config";

const description =
  "Learn how Redefine Labs combines product thinking, software engineering, and practical AI to build digital products that work for businesses and their users.";

export const metadata = createPageMetadata({
  title: "About",
  description,
  path: "/about",
});

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.url}/about#webpage`,
  url: `${siteConfig.url}/about`,
  name: "About Redefine Labs",
  description,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#organization`,
  },
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "en",
};

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

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={aboutPageStructuredData} />
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

      <Section spacing="default" className="mx-auto !pt-20 !pb-16">
        <Eyebrow>Who we are</Eyebrow>
        <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-40 2xl:gap-88">
          <div className="max-w-[600px] 2xl:max-w-2xl">
            <Heading size="section">
              <ScrollTextReveal>
                Redefine Labs is a software and AI engineering company helping businesses build better digital products.
              </ScrollTextReveal>
            </Heading>
          </div>

          <div className="flex justify-end">
            <p className="max-w-2xl 2xl:max-w-3xl">
              We believe great software is more than clean code or beautiful interfaces. It should simplify complexity, improve the way people work, and deliver lasting business value.
              Every project begins with understanding your business, users, and objectives before engineering solutions that are scalable, reliable, and built to grow.
            </p>
          </div>
        </div>
      </Section>

      <ProcessSection />

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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
              <div className="grid xl:grid-cols-2 gap-4 p-5">
                <Heading as="h3" size="card">
                  {value.title}
                </Heading>
                <p className="text-muted-foreground">
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
