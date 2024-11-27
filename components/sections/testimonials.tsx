"use client";

import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetReviews } from "@/hooks";

export const Testimonials = () => {
  const { data, isLoading, isSuccess } = useGetReviews({ per_page: 5 });

  return (
    <section id="testimonials" className="screen py-24">
      <Carousel>
        <CarouselContent>
          {(isLoading || !isSuccess) && (
            <CarouselItem className="space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="h-5 w-5 rounded-full" />
                ))}
              </div>
              <div className="space-y-5">
                <Skeleton className="h-5 w-[80%] rounded-md" />
                <Skeleton className="h-5 w-[50%] rounded-md" />
                <Skeleton className="h-5 w-[40%] rounded-md" />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                </div>
              </div>
            </CarouselItem>
          )}
          {isSuccess &&
            data?.data?.map(({ id, rating, message, user_image, user_name, specialization }) => (
              <CarouselItem key={id} className="space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, index) => (
                    <Image
                      key={index}
                      src="/icons/star.svg"
                      alt="Star Icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  ))}
                </div>
                <h3 className="text-[#0A0A0A] font-medium text-3xl leading-8 md:text-3xl md:leading-9 lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-[60px]">
                  {message}
                </h3>
                <div className="flex items-center gap-4">
                  <Avatar className="h-[56px] w-[56px]">
                    <AvatarImage src={user_image} />
                    <AvatarFallback>{user_name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-[#0A0A0A] text-lg font-medium">{user_name}</h3>
                    <p className="text-[#727282]">{specialization}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="w-fit mr-auto space-x-8 mt-12">
          <CarouselPrevious disabled={isLoading} />
          <CarouselNext disabled={isLoading} />
        </div>
      </Carousel>
    </section>
  );
};
