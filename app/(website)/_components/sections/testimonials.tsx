"use client";

import * as React from "react";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { TestimonialCard } from "@website/_components/cards/testimonial-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { testimonials } from "@website/constants";

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <TestimonialCard initialData={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-fit mr-auto space-x-8 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </Section>
  );
};
