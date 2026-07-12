import Image from "next/image";
import { Eyebrow, Heading } from "./typography";

const works = [
  {
    title: "Bess",
    category: "Automation",
    image: "/images/clients/ems.png",
  },
  {
    title: "Yellow Duck",
    category: "Software",
    image: "/images/clients/iq70plus.png",
  },
  {
    title: "Skypoly",
    category: "Data Visualisation",
    image: "/images/clients/skypoly-2.png",
  },
];

export function SelectedWorkSection() {
  return (
    <section
      id="works"
      className="mx-auto w-full pb-16 md:pb-36 2xl:pb-56 px-4 md:px-8 2xl:px-12"
    >
      <div className="mb-4 md:mb-8">
        <Eyebrow className="mb-2">Selected Work</Eyebrow>
        <Heading size="section">Work built with focus.</Heading>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {works.map((work) => (
          <article key={work.title} className="relative group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={work.image}
                alt={`${work.title} project preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-3 flex">
                <Eyebrow
                  as="span"
                  className="flex h-9 items-center rounded-full bg-black/20 backdrop-blur px-3 text-white"
                >
                  {work.title}
                </Eyebrow>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
