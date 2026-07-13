"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Section } from "./section";
import { Eyebrow, Heading } from "./typography";

const faqs = [
  {
    question: "How long does custom software development take?",
    answer:
      "Most custom software projects take more than two weeks, depending on the project scope, complexity, and requirements. We’ll provide a clear timeline after understanding your business needs.",
  },
  {
    question: "Do you develop AI solutions tailored to our business?",
    answer:
      "Yes. Every AI solution is designed around your business processes, integrating seamlessly with your existing systems and workflows.",
  },
  {
    question: "Do you work with SMEs and enterprise businesses?",
    answer:
      "Yes. We work with businesses of all sizes, from growing SMEs to established enterprises, delivering solutions tailored to their unique workflows, operations, and goals.",
  },
  {
    question: "Do you offer monthly retainer packages?",
    answer:
      "Yes. We offer flexible monthly retainer packages starting from RM8,000, providing ongoing design, development, AI implementation, maintenance, and continuous product improvements.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We begin by understanding your existing system architecture before designing a seamless integration with your software, APIs, or third-party platforms.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We continue to support and maintain your software after launch, ensuring it remains secure, reliable, and ready to evolve with your business.",
  },
  {
    question: "Can you redesign or improve our existing software or website?",
    answer:
      "Yes. We review your existing software or website, identify areas for improvement, and redesign the experience with a stronger focus on usability, performance, and long-term scalability.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across a range of industries, including energy, electricity, finance, manufacturing, and more, adapting every solution to the unique needs of each business.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" spacing="default" className="mx-auto">
      <div className="grid gap-4 lg:gap-0 lg:grid-cols-[0.8fr_1.2fr] py-6 md:py-0 border-y border-black/15">
        <div className="md:p-8">
          <Eyebrow>FAQ</Eyebrow>
          <Heading size="section" className="max-w-lg">
            More questions? Contact us if you need further information
          </Heading>
        </div>

        <div className="divide-y divide-border md:border-l md:border-border md:p-8">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            const answerId = `faq-answer-${index}`;

            return (
              <article key={faq.question} className="py-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="pt-1 text-[13px] uppercase text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Heading as="span" size="faq" className="text-black">
                      {faq.question}
                    </Heading>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center text-muted-foreground">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={1.75} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={1.75} />
                    )}
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="">
                      <p className="mt-3 max-w-xl text-black/65">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
