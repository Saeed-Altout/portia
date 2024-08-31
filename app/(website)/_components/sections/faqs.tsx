import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { Heading } from "@website/_components/common/heading";
import { faqsData } from "@website/constants";

export const FAQs = () => {
  return (
    <section className="max-container section">
      <div className="flex items-start justify-between flex-col lg:flex-row gap-8">
        <div className="max-w-[448px]">
          <Heading title="FAQs" />
          <p className="text-gray-primary text-sm md:text-base">
            Here are the most common questions and how we answer them,
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <Button variant="link" asChild className="px-0 underline" size="sm">
              {/* TODO: Update href link of sales team */}
              <Link href="/" className="!text-gray-primary">
                chat to Sales team.
              </Link>
            </Button>
          </p>
        </div>

        <div className="flex-1 w-full">
          <Accordion type="single" collapsible className="flex flex-col gap-5">
            {/* TODO: Update data from API */}
            {faqsData.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <span className="font-medium text-lg">{question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-primary text-sm md:text-base">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
