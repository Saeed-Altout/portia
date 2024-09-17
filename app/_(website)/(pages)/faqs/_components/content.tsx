import Link from "next/link";

import { freqAQsData } from "@/app/_(website)/constants";

import { Section } from "@/app/_(website)/_components/ui/section";
import { Container } from "@/app/_(website)/_components/ui/container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";

export const Content = () => {
  return (
    <Section>
      <Container className="gap-y-16">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-5 max-w-[800px] mx-auto"
        >
          {freqAQsData.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="py-4"
            >
              <AccordionTrigger>
                <h3 className="font-medium text-lg text-left">{question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <Paragraph>{answer}</Paragraph>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="w-full flex items-start justify-between flex-col gap-5 md:flex-row p-8 bg-[#F5F5FA] rounded-[16px]">
          <div className="space-y-2 flex-1 max-w-3xl">
            <h1 className="text-xl font-medium">Still have questions?</h1>
            <Paragraph>
              Can’t find the answer you’re looking for? Please chat to our team.
            </Paragraph>
          </div>
          <Button className="w-full md:w-fit" asChild>
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};