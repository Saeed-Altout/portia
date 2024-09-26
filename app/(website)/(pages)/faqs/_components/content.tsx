"use client";
import Link from "next/link";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { FaqSkeleton } from "@website/_components/skeletons/faq-skeleton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { useGetAllFaqsQuery } from "@/hooks/faqs/get-all-faqs";

export const Content = () => {
  const { data: faqs, isLoading, isError } = useGetAllFaqsQuery();
  if (isError) {
    return (
      <div className="w-full flex flex-col gap-5 max-w-[800px] mx-auto text-center py-20">
        No faqs found
      </div>
    );
  }

  return (
    <Section>
      <Container className="gap-y-16">
        {isLoading ? (
          <div className="w-full flex flex-col gap-5 max-w-[800px] mx-auto">
            {[...Array(10)].map((_, index) => (
              <FaqSkeleton key={index} />
            ))}
          </div>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-5 max-w-[800px] mx-auto"
          >
            {faqs?.data.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={`faq-${id}`} className="py-4">
                <AccordionTrigger>
                  <h3 className="font-medium text-lg text-left">{question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="w-full flex items-start justify-between flex-col gap-5 md:flex-row p-8 bg-[#F5F5FA] rounded-[16px]">
          <div className="space-y-2 flex-1 max-w-3xl">
            <h1 className="text-xl font-medium">Still have questions?</h1>
            <p className="text">
              Can’t find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <Button className="w-full md:w-fit" asChild>
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
