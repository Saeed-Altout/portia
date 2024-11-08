"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useGetAllFaqsQuery } from "@/app/(root)/hooks";
import { FaqSkeleton } from "@/app/(root)/_components/skeletons/faq-skeleton";

export const Content = () => {
  const { data: faqs, isLoading, isError, isSuccess } = useGetAllFaqsQuery();

  return (
    <section id="all-faqs" className="w-full py-20">
      <div className="container space-y-12">
        {(isLoading || isError) && (
          <div className="w-full flex flex-col gap-5 max-w-[800px] mx-auto">
            {[...Array(10)].map((_, index) => (
              <FaqSkeleton key={index} />
            ))}
          </div>
        )}
        {isSuccess && (
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
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        <div className="w-full flex items-start justify-between flex-col gap-5 md:flex-row p-8 bg-[#F5F5FA] rounded-[16px]">
          <div className="space-y-2 flex-1 max-w-3xl">
            <h1 className="text-xl font-medium">Still have questions?</h1>
            <p>
              Can’t find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <Button className="w-full md:w-fit" asChild>
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
