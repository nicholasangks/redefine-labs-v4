"use client";

import { useState } from "react";
import { Eyebrow, Heading } from "./typography";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We work on software products, dashboards, websites, automation systems, and AI workflows for founders and growing teams.",
  },
  {
    question: "Can you work with an existing product?",
    answer:
      "Yes. We can improve an existing interface, rebuild key workflows, add automation, or help turn a messy internal process into a focused product.",
  },
  {
    question: "Do you only handle design or also development?",
    answer:
      "Both. We can move from product strategy and interface design into implementation, integration, and launch.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We start with a short conversation to understand the problem, constraints, timeline, and what a useful first version should include.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto w-full px-6 sm:px-10 lg:px-8 py-16 md:py-36 2xl:py-56"
    >
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <Heading size="section" className="max-w-lg">
            More questions? Contact us if you need further information
          </Heading>
        </div>

        <div className="divide-y divide-black/15 border-t border-black/15">
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
                  <Heading as="span" size="faq" className="text-black">
                    {faq.question}
                  </Heading>
                  <span className="mt-1 text-2xl leading-none text-black/45">
                    {isOpen ? "-" : "+"}
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
                      <p className="mt-3 max-w-xl text-[clamp(.95rem,0.9vw,1.15rem)] leading-snug text-black/65">
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
    </section>
  );
}
