"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { customersData } from "@/constants";

export const Customers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <section className="customers screen py-24">
      <Carousel>
        <CarouselContent className="space-x-8 px-4">
          {customersData.map((customer, index) => (
            <CarouselItem
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative min-w-[360px] h-[480px] group cursor-pointer basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Image
                src={customer.imgUrl}
                alt={customer.agency}
                className="object-cover w-full h-full absolute top-0 left-0"
              />
              <motion.div
                initial={{ height: 212 }}
                animate={{ height: hoveredIndex === index ? 260 : 212 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 drop-shadow-xl left-0 w-full min-h-[212px] bg-white bg-opacity-10 backdrop-blur-lg flex items-end justify-start"
              >
                <div className="text-left p-6 pb-8 space-y-1">
                  {hoveredIndex !== index && (
                    <motion.div {...fadeTransition} className="flex items-center justify-start gap-x-1 py-4">
                      {[...Array(customer.rate)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="text-white h-4 w-4" />
                      ))}
                    </motion.div>
                  )}
                  {hoveredIndex === index && (
                    <motion.p {...fadeTransition} className="text-white text-lg py-4">
                      {customer.comment}
                    </motion.p>
                  )}
                  <p className="text-white text-3xl font-semibold">{customer.name}</p>
                  <p className="text-white text-lg font-medium pt-2">{customer.position}</p>
                  <p className="text-white">{customer.agency}</p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-fit mr-auto space-x-8 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};
