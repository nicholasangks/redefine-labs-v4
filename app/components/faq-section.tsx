"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "../data/faqs";
import { siteConfig } from "../site-config";
import { JsonLd } from "./json-ld";
import { Section } from "./section";
import { Eyebrow, Heading } from "./typography";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  isPartOf: {
    "@id": `${siteConfig.url}/#webpage`,
  },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" spacing="default" className="mx-auto">
      <JsonLd data={faqStructuredData} />
      <div className="grid gap-4 lg:gap-0 lg:grid-cols-[0.8fr_1.2fr] py-6 md:py-0 ">
        <div className="md:pr-14">
          <Eyebrow>FAQ</Eyebrow>
          <Heading size="section" className="max-w-md">
            More questions? Contact us if you need further information
          </Heading>
        </div>

        <div className="divide-y divide-border">
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
                    {/* <span className="pt-1 text-[13px] uppercase text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}
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
                      <p className="mt-3 max-w-2xl text-muted-foreground">
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
