"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  TestimonialCard,
  TestimonialSkeltonCard,
} from "@/app/(root)/_components/cards/testimonial-card";
import { useGetReviewsQuery } from "@/app/(root)/hooks";

export const Testimonials = () => {
  const {
    data: reviews,
    isLoading,
    isSuccess,
    isError,
  } = useGetReviewsQuery(5);

  return (
    <section id="testimonials" className="container py-24">
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
    </section>
  );
};
