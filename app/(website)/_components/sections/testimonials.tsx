"use client";

import * as React from "react";

import { testimonials } from "@website/constants";

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

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <TestimonialCard initialData={testimonial} />
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
