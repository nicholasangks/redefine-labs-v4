import { Section } from "./section";
import { Eyebrow, Heading } from "./typography";

const works = [
  {
    title: "Bess",
    category: "Automation",
    image: "/images/works/ems.webp",
  },
  {
    title: "IQ70Plus",
    category: "Software",
    image: "/images/works/iq70plus.webp",
  },
  {
    title: "Skypoly",
    category: "Data Visualisation",
    image: "/images/works/skypoly.webp",
  },
];

export function SelectedWorkSection() {
  return (
    <Section id="works" spacing="default" className="mx-auto">
      <div className="mb-4 md:mb-8">
        <Eyebrow className="mb-2">Selected Work</Eyebrow>
        <Heading size="section">Work built with focus.</Heading>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {works.map((work) => (
          <article key={work.title} className="relative group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src={work.image}
                alt={`${work.title} project preview`}
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 flex">
                <div
                  className="flex h-9 items-center rounded-full bg-black/20 backdrop-blur px-3 text-white text-[0.9rem]"
                >
                  {work.title}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
