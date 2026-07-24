import { HoverCircleButton } from "../components/hover-circle-button";
import { Section } from "../components/section";
import { Eyebrow, Heading } from "../components/typography";
import { createPageMetadata } from "../seo";

export const metadata = {
  ...createPageMetadata({
    title: "Selected Work",
    description:
      "Redefine Labs is currently updating its portfolio. Contact us to request relevant work and case studies.",
    path: "/works",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

const portfolioRequestUrl =
  "https://wa.me/60123490816?text=Hi%20Redefine%20Labs%2C%20I%27d%20like%20to%20view%20your%20portfolio.";

export default function WorksPage() {
  return (
    <main>
      <Section
        spacing="none"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* <img
            src="/images/brand-assets/logo.png"
            alt="Redefine Labs"
            className="mb-10 h-12 w-12 object-contain"
          /> */}

          <Eyebrow align="center">Portfolio update in progress</Eyebrow>
          <Heading as="h1" size="hero" align="center" className="text-balance">
            Our portfolio is currently being updated.
          </Heading>

          <p className="mt-6 max-w-[600px] text-balance leading-relaxed">
            We’re preparing a clearer showcase of the software, websites, AI
            solutions, and data products we’ve delivered. Contact us for a
            private portfolio or relevant case studies in the meantime.
          </p>

          <HoverCircleButton href={portfolioRequestUrl} className="mt-4">
            Request portfolio
          </HoverCircleButton>

        </div>
      </Section>
    </main>
  );
}
