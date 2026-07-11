import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "./components/faq-section";
import { HeroOrb } from "./components/hero-orb";
import { HoverCircleButton } from "./components/hover-circle-button";
import { ScrollTextReveal } from "./components/scroll-text-reveal";
import { Eyebrow, Heading } from "./components/typography";
import { SelectedWorkSection } from "./components/selected-work-section";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  const services = ["Custom Software", "AI Solutions", "Dashboard & Monitoring", "Website Design", "Product Design"];
  const navItems = ["Services", "About", "Works"];
  const companies = [
    {
      id: "iq70plus-2",
      name: "IQ70+",
      src: "/images/clients/gen.png",
      width: 120,
      height: 61,
    },
    {
      id: "genetec",
      name: "Genetec",
      src: "/images/clients/ydc.png",
      width: 120,
      height: 61,
    },
    {
      id: "iq70plus-1",
      name: "IQ70+",
      src: "/images/clients/iq70.png",
      width: 120,
      height: 61,
    },
    {
      id: "nova-1",
      name: "NOVA",
      src: "/images/clients/ce.png",
      width: 120,
      height: 61,
    },
    {
      id: "nova-2",
      name: "NOVA",
      src: "/images/clients/poly.png",
      width: 120,
      height: 61,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-6 left-0 z-50 w-full px-4 md:px-8 2xl:px-12">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-medium text-black">
              <Image
                src="/images/brand-assets/logo.png"
                alt="Redefine Labs"
                width={95}
                height={95}
                className="w-8"
                priority
              />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden flex rounded-full bg-white/45 px-4 backdrop-blur-sm sm:block"
            >
              <ul className="flex items-center h-9 gap-7 text-sm font-medium text-black/55">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="transition-colors duration-200 hover:text-black"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <HoverCircleButton
            href="mailto:hello@redefinelabs.com"
            className="px-4"
          >
            Start a project
          </HoverCircleButton> 
        </div>
      </header>

      <section className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col pt-20 pb-16 md:pt-22 md:pb-4 px-4 md:px-8 2xl:px-12">
        <div className="grid flex-1 items-center gap-0 md:gap-12 md:py-12 md:grid-cols-[1fr_1fr_1fr] lg:py-0">
          <div className="order-2 flex flex-col items-center md:items-start gap-4 md:order-none 2xl:pr-20">
            <Heading as="h1" size="hero" className="!text-center md:!text-left">
              Software and AI automation, built with taste
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
              <Image
                src={company.src}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 md:px-8 py-16 md:py-36 2xl:py-56">
        <div className="mx-auto max-w-2xl 2xl:max-w-4xl text-center">
          <Eyebrow align="center">About</Eyebrow>
          <Heading size="section" align="center">
            <ScrollTextReveal>
              we combine product design, software engineering, and AI to build
              software that works beautifully.
            </ScrollTextReveal>
          </Heading>
        </div>
      </section>

      <ServicesSection />
      <SelectedWorkSection />
      <FaqSection />
    </main>
  );
}
