/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetReviewsQuery } from "@/services/review/hooks";

export const Customers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { data, isLoading, isSuccess } = useGetReviewsQuery({ per_page: 0 });
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/images/default-user.png";
  };

  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h8JAAAAABJRU5ErkJggg==";

  return (
    <section className="customers screen py-24">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="space-x-8 px-4">
          {(isLoading || !isSuccess) &&
            [...Array(4)].map((_, index) => (
              <CarouselItem
                key={index}
                className="relative border min-w-[360px] h-[480px] group cursor-pointer basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Skeleton className="w-full h-full absolute top-0 left-0" />
                <div className="absolute bottom-0 left-0 w-full min-h-[212px] bg-white bg-opacity-10 backdrop-blur-lg flex items-end justify-start">
                  <div className="text-left p-6 pb-8 space-y-1">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-8 w-32" />
                    <Skeleton className="h-6 w-48" />
                  </div>
                </div>
              </CarouselItem>
            ))}

          {isSuccess &&
            data?.data.map((customer, index) => (
              <CarouselItem
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative min-w-[360px] h-[480px] group cursor-pointer basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <img
                  src={customer.user_image ?? "/images/default-user.png"}
                  alt={customer.user_name}
                  className="object-cover w-full h-full absolute top-0 left-0"
                  onError={handleImageError}
                />
                <motion.div
                  initial={{ height: 212 }}
                  animate={{ height: hoveredIndex === index ? 260 : 212 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 drop-shadow-xl left-0 w-full min-h-[212px] bg-white bg-opacity-10 backdrop-blur-lg flex items-end justify-start"
                >
                  <div className="text-left p-6 pb-8 space-y-1">
                    {hoveredIndex !== index && (
                      <motion.div
                        {...fadeTransition}
                        className="flex items-center justify-start gap-x-1 py-4"
                      >
                        {[...Array(customer.rating)].map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className="text-white h-4 w-4"
                          />
                        ))}
                      </motion.div>
                    )}
                    {hoveredIndex === index && (
                      <motion.p
                        {...fadeTransition}
                        className="text-white text-lg py-4"
                      >
                        {customer.message}
                      </motion.p>
                    )}
                    <p className="text-white text-3xl font-semibold">
                      {customer.user_name}
                    </p>
                    <p className="text-white text-lg font-medium pt-2">
                      {customer.specialization}
                    </p>
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
