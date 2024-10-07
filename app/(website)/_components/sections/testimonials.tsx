"use client";

import * as React from "react";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import {
  TestimonialCard,
  TestimonialSkeltonCard,
} from "@website/_components/cards/testimonial-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useGetReviewsQuery } from "@website/hooks";

export const Testimonials = () => {
  const {
    data: reviews,
    isLoading,
    isSuccess,
    isError,
  } = useGetReviewsQuery(5);

  return (
    <Section>
      <Container>
        <Carousel className="w-full">
          <CarouselContent>
            {isSuccess && (
              <>
                {reviews?.data.map((review, index) => (
                  <CarouselItem key={index}>
                    <TestimonialCard initialData={review} />
                  </CarouselItem>
                ))}
              </>
            )}
            {(isError || isLoading) && <TestimonialSkeltonCard />}
          </CarouselContent>
          {isSuccess && (
            <div className="w-fit mr-auto space-x-8 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          )}
        </Carousel>
      </Container>
    </Section>
  );
};
