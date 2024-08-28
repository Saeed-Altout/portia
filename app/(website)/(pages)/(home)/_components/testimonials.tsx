"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { testimonials } from "@/app/(website)/constants";

export const Testimonials = () => {
  return (
    <section className="max-container section">
      <Carousel>
        <CarouselContent>
          {/* TODO: Add some plugins if we need */}
          {testimonials.map(({ rate, name, comment, position }, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardHeader className="px-0">{rate}</CardHeader>
                <CardContent className="px-0">
                  <h3 className="text-2xl leading-6 md:text-3xl md:leading-7 lg:text-4xl lg:leading-9 font-medium  ">
                    {comment}
                  </h3>
                </CardContent>
                <CardFooter className="px-0 flex flex-col gap-2 items-start">
                  <p>{name}</p>
                  <p className="text-primary">{position}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
