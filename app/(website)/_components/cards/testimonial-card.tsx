"use client";

import * as React from "react";
import Image from "next/image";

import { AvatarBox } from "@website/_components/ui/avatar-box";

interface TestimonialCardProps {
  rate: number;
  comment: string;
  name: string;
  position: string;
}

export const TestimonialCard = ({
  initialData,
}: {
  initialData: TestimonialCardProps;
}) => {
  const { name, rate, comment, position } = initialData;

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-start gap-x-1">
        {[...Array(rate)].map((_, index) => (
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
        {comment}
      </h3>
      <AvatarBox name={name} position={position} imgUrl={""} />
    </div>
  );
};
