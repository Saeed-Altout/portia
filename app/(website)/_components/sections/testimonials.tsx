"use client";

import AutoPlay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@website/constants";

export const Testimonials = () => {
  return (
    <section className="max-container section">
      <Carousel plugins={[AutoPlay()]} opts={{ loop: true }}>
        <CarouselContent>
          {/* TODO: Update data from API */}
          {testimonials.map(({ rate, name, comment, position }, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardHeader className="px-0">{rate}</CardHeader>
                <CardContent className="px-0">
                  <h3 className="text-2xl leading-8 md:text-3xl md:leading-9 lg:text-4xl lg:leading-[44px] font-medium  ">
                    {comment}
                  </h3>
                </CardContent>
                <CardFooter className="px-0 flex flex-row gap-2 items-center">
                  <Avatar className="h-[56px] w-[56px]">
                    <AvatarImage src="" />
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col py-[2px] items-start">
                    <p>{name}</p>
                    <p className="text-[#8082F2]">{position}</p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
