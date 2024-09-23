import Link from "next/link";

import { faqsData } from "@/app/(website)/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Section } from "@/app/(website)/_components/ui/section";
import { Container } from "@/app/(website)/_components/ui/container";
import { Heading } from "@/app/(website)/_components/ui/heading";
import { Paragraph } from "@/app/(website)/_components/ui/paragraph";

export const FAQs = () => {
  return (
    <Section>
      <Container className="lg:flex-row gap-x-16 gap-y-12">
        <div className="max-w-[448px]">
          <Heading title="FAQs" />
          <Paragraph size="lg">
            Here are the most common questions and how we answer them,
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <Link href="/" className="underline">
              chat to Sales team.
            </Link>
          </Paragraph>
        </div>

        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="flex flex-col gap-5">
            {faqsData.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <h3 className="font-medium text-lg text-left">{question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <Paragraph>{answer}</Paragraph>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};
