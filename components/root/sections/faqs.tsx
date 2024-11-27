"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetFaqs } from "@/hooks/root/use-get-faqs";

export const FAQs = () => {
  const { data, isLoading } = useGetFaqs();

  return (
    <section
      id="faqs"
      className="screen py-24 flex flex-col lg:flex-row gap-x-16 gap-y-12"
    >
      <div className="max-w-[448px] space-y-3">
        <h1 className="text-[#0A0A0A] text-3xl lg:text-4xl font-semibold">
          FAQs
        </h1>
        <p className="text-[#727282] text-lg">
          Here are the most common questions and how we answer them, Can&apos;t
          find the answer you&apos;re looking for? Please
          <Link href="/contact-us" className="ml-2 underline">
            chat to Sales team.
          </Link>
        </p>
      </div>
      <div className="flex-1">
        <Accordion type="single" collapsible className="space-y-8">
          {isLoading &&
            [...Array(5)].map((_, index) => (
              <AccordionItem key={index} value={`faq-${index + 1}`}>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </AccordionItem>
            ))}
          {!isLoading &&
            data?.data?.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`faq-${index + 1}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
};
