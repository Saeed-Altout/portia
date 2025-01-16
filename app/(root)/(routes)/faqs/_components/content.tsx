"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetFaqsQuery } from "@/services/faqs/hooks";
import { ROUTES } from "@/config/constants";
import {
  textVariants,
  animationTransition,
  animationViewport,
} from "@/config/animations";

export const Content = () => {
  const { data: faqs, isLoading, isSuccess } = useGetFaqsQuery();

  return (
    <section id="all-faqs" className="w-full pb-20">
      <div className="screen space-y-12">
        {(isLoading || !isSuccess) && (
          <div className="w-full flex flex-col gap-5 max-w-[800px] mx-auto">
            {[...Array(10)].map((_, index) => (
              <div
                className="flex items-center justify-between gap-x-5 py-8"
                key={index}
              >
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {isSuccess && (
          <motion.div
            className="w-full flex flex-col gap-5 max-w-[800px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={animationViewport}
            transition={{
              staggerChildren: animationTransition.staggerChildren,
            }}
          >
            <Accordion type="single" collapsible>
              {faqs?.data.map(({ id, question, answer }, key) => (
                <motion.div key={key} variants={textVariants}>
                  <AccordionItem value={`faq-${id}`}>
                    <AccordionTrigger>
                      <h3 className="font-medium text-lg text-left">
                        {question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        )}

        <motion.div
          className="w-full flex items-start justify-between flex-col gap-5 md:flex-row p-8 bg-[#F5F5FA] rounded-[16px]"
          initial="hidden"
          whileInView="visible"
          viewport={animationViewport}
          variants={textVariants}
          transition={{ duration: animationTransition.duration, delay: 0.2 }}
        >
          <div className="space-y-2 flex-1 max-w-3xl">
            <h1 className="text-xl font-medium">Still have questions?</h1>
            <p>
              Can’t find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <Button className="w-full md:w-fit" asChild>
            <Link href={ROUTES.CONTACT_US}>Contact us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
