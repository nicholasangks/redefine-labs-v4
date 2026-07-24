import { FaqSection } from "./components/faq-section";
import { HeroOrb } from "./components/hero-orb";
import { HoverCircleButton } from "./components/hover-circle-button";
import { JsonLd } from "./components/json-ld";
import { ScrollTextReveal } from "./components/scroll-text-reveal";
import { Section } from "./components/section";
import { Eyebrow, Heading } from "./components/typography";
import { SelectedWorkSection } from "./components/selected-work-section";
import { ServicesSection } from "./components/services-section";
import { createPageMetadata } from "./seo";
import { siteConfig } from "./site-config";

const description =
  "Custom software, applied AI, websites, dashboards, and digital products engineered around how your business actually works.";

export const metadata = createPageMetadata({
  title: "Redefine Labs | Software & AI Engineering",
  description,
  path: "/",
  absoluteTitle: true,
});

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: "Redefine Labs | Software & AI Engineering",
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
  hasPart: [
    { "@id": `${siteConfig.url}/#services` },
    { "@id": `${siteConfig.url}/#faq` },
  ],
  inLanguage: "en",
};

export default function Home() {
  const services = ["Custom Software", "AI Solutions", "Energy Management Systems", "Website Design", "Product Design"];
  const companies = [
    {
      id: "iq70plus-2",
      name: "IQ70Plus",
      src: "/images/clients/genetec.webp",
    },
    {
      id: "genetec",
      name: "Genetec",
      src: "/images/clients/yellow-duck-capital.webp",
    },
    {
      id: "iq70plus-1",
      name: "IQ70+",
      src: "/images/clients/iq70plus.webp",
    },
    {
      id: "climate-energy",
      name: "Climate Energy",
      src: "/images/clients/climate-energy.webp",
    },
    {
      id: "nova-2",
      name: "NOVA",
      src: "/images/clients/poly.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={homepageStructuredData} />
      <section className="mx-auto flex min-h-screen w-full flex-col pt-20 pb-16 md:pt-0 md:pb-4 px-4 md:px-8 2xl:px-12">
        <div className="grid flex-1 items-center gap-0 md:gap-12 md:py-12 md:grid-cols-[1fr_1fr_1fr] lg:py-0">
          <div className="order-2 flex flex-col items-center md:items-start gap-4 md:order-none md:max-w-[400px]">
            <Heading as="h1" size="hero" className="!text-center md:!text-left">
              {/* Software and AI automation, built with taste */}
              Engineering Software and AI for Business
            </Heading>
 
            <HoverCircleButton href="mailto:hello@redefinelabs.com">
              Start a project
            </HoverCircleButton>
          </div>

          <div className="order-1 md:order-none">
            <HeroOrb />
          </div>

          <div className="services-marquee order-3 mx-auto h-8 w-full overflow-hidden text-center text-[1rem] md:text-[1.1rem] xl:text-[1.2rem] font-medium md:order-none md:h-32 md:w-auto">
            <div className="services-marquee-track">
              <ul className="services-marquee-list">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>

              <ul className="services-marquee-list" aria-hidden="true">
                {services.map((service) => (
                  <li key={`${service}-loop`}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="scrollbar-none flex items-end gap-10 overflow-x-auto px-4 pb-2 text-center md:grid md:grid-cols-3 md:overflow-visible md:px-12 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex w-40 flex-none items-center justify-center brightness-0 md:w-42 md:flex-auto xl:w-44 2xl:w-48"
            >
              <img
                src={company.src}
                alt={`${company.name} logo`}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      <Section spacing="default">
        <div className="mx-auto max-w-2xl 2xl:max-w-4xl text-center">
          <Eyebrow align="center">About</Eyebrow>
          <Heading size="section" align="center">
            <ScrollTextReveal>
              {/* we combine product design, software engineering, and AI to build software that works beautifully. */}
              We combine product design, software engineering, and AI to build digital products built to scale.
            </ScrollTextReveal>
          </Heading>
        </div>
      </Section>

      <ServicesSection />
      <SelectedWorkSection />
      <FaqSection />
    </main>
  );
}
