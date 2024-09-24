import * as React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { Heading } from "@website/_components/ui/heading";

import { faqsData } from "@website/constants";

export const FAQs = () => {
  return (
    <Section>
      <Container className="lg:flex-row gap-x-16 gap-y-12">
        <div className="max-w-[448px]">
          <Heading title="FAQs" />
          <p className="text !text-lg">
            Here are the most common questions and how we answer them,
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <Link href="/contact-us" className="underline">
              chat to Sales team.
            </Link>
          </p>
        </div>

        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="flex flex-col">
            {faqsData.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <h3 className="font-medium text-lg text-left">{question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};
