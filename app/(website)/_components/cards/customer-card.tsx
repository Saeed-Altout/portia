"use client";

import * as React from "react";
import Image from "next/image";

import { FaStar } from "react-icons/fa";

interface CustomersCardProps {
  imgUrl: string;
  agency: string;
  rate: number;
  comment: string;
  name: string;
  position: string;
}

export const CustomersCard = ({
  initialData,
}: {
  initialData: CustomersCardProps;
}) => {
  const { imgUrl, agency, rate, comment, name, position } = initialData;
  return (
    <div>
      <Image src={imgUrl} alt={agency} fill className="object-cover" />
      <div className="absolute bottom-0 drop-shadow-xl left-0 w-full min-h-[202px] duration-300 ease-in-out bg-white bg-opacity-10 backdrop-blur-lg flex items-center justify-start">
        <div className="text-left p-6 pb-8 space-y-1">
          <div className="flex items-center justify-start gap-x-1 group-hover:hidden py-4">
            {[...Array(rate)].map((_, index) => (
              <FaStar key={index} className="text-white h-4 w-4" />
            ))}
          </div>
          <p className="text !text-white !text-lg hidden group-hover:block py-4">
            {comment}
          </p>
          <p className="text !text-white !text-3xl !font-semibold">{name}</p>
          <p className="text !text-white !text-lg !font-medium pt-2">
            {position}
          </p>
          <p className="text !text-white">{agency}</p>
        </div>
      </div>
    </div>
  );
};
