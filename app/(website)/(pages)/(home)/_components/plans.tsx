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

import { Heading } from "@website/_components/common/heading";
import { plansData } from "@website/constants";

export const Plans = () => {
  return (
    <section className="max-container section space-y-16">
      <Heading
        heading="Pricing"
        title="Simple, transparent pricing"
        description="We believe Portia should be accessible to all people, no matter their usage."
        titleStyle="lg:text-5xl"
        descriptionStyle="lg:text-xl lg:p-2"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TODO: Update data from API */}
        {plansData.map(({ price, type, features }, index) => (
          <Card key={index} className="shadow-xl rounded-[16px] relative">
            {index + 1 === 1 && (
              <div className="absolute right-[20px] md:right-[-70px] top-[-30px] flex items-start justify-center">
                <Image
                  src="/icons/arrow.svg"
                  alt="Arrow"
                  width={62}
                  height={30}
                  className="relative top-1"
                />
                <p className="text-primary font-medium text-sm">
                  Most Popular!
                </p>
              </div>
            )}
            <CardHeader className="text-center pt-12 pb-6">
              <CardTitle className="font-semibold text-4xl lg:text-5xl">
                ${price}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-xl">{type}</h3>
                <p>who is this for?</p>
              </div>
              <div className="flex flex-col gap-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-x-2"
                  >
                    <span className="bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                      <Check className="text-[#26A6A4] h-4 w-4" />{" "}
                    </span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pb-8">
              {/* TODO: Update functionally of card plan button */}
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
