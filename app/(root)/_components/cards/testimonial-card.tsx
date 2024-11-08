"use client";

import Image from "next/image";

import { AvatarBox } from "@/app/(root)/_components/ui/avatar-box";
import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialCard = ({ initialData }: { initialData: Review }) => {
  const { user_image, user_name, specialization, message, rating } =
    initialData;

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-start gap-x-1">
        {[...Array(rating)].map((_, index) => (
          <Image
            src="/icons/star.svg"
            alt="Star icon"
            width={20}
            height={20}
            key={index}
          />
        ))}
      </div>
      <h3 className="text-2xl leading-8 md:text-3xl md:leading-9 lg:text-4xl lg:leading-[44px] font-medium">
        {message}
      </h3>
      <AvatarBox
        name={user_name || "unknown"}
        position={specialization}
        imgUrl={user_image}
      />
    </div>
  );
};
export const TestimonialSkeltonCard = () => {
  return (
    <div className="space-y-10 w-full px-8">
      <div className="flex items-center justify-start gap-x-1">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-5 w-5 rounded-full" />
        ))}
      </div>
      <div className="space-y-5">
        <Skeleton className="h-5 w-[80%] rounded-md" />
        <Skeleton className="h-5 w-[50%] rounded-md" />
        <Skeleton className="h-5 w-[40%] rounded-md" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-full" />

        <div className="space-y-4">
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-32 rounded-md" />
        </div>
      </div>
    </div>
  );
};
