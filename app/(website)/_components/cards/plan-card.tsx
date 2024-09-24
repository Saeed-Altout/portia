"use client";

import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlanCardProps {
  isPopular?: boolean;
  price: string;
  type: string;
  features: any[];
}

export const PlanCard = ({ initialData }: { initialData: PlanCardProps }) => {
  const { isPopular, price, type, features } = initialData;

  return (
    <Card className="shadow-xl rounded-[16px] relative">
      {isPopular && (
        <div className="absolute right-[20px] md:right-[-70px] top-[-30px] flex items-start justify-center">
          <Image
            src="/icons/arrow.svg"
            alt="Arrow"
            width={62}
            height={30}
            className="relative top-1"
          />
          <p className="text-primary font-medium text-sm">Most Popular!</p>
        </div>
      )}
      <CardHeader className="text-center p-0 px-8 pt-10 space-y-4">
        <CardTitle className="font-semibold text-4xl lg:text-5xl">
          {price}
        </CardTitle>
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-xl">{type}</h3>
          <p className="text">who is this for?</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <div className="flex flex-col gap-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-x-3"
            >
              <span className="bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                <Check className="text-[#26A6A4] h-4 w-4" />{" "}
              </span>
              <p className="text capitalize">{feature}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-2">
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  );
};
