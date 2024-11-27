import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import { plansData } from "@/constants";

export const Plans = () => {
  return (
    <section id="plans" className="screen py-24 space-y-24">
      <Heading
        label="Pricing"
        title="Simple, transparent pricing"
        description="We believe Portia should be accessible to all people, no matter their usage."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {plansData.map(({ isPopular, price, features, type }, index) => (
          <div
            key={index}
            className="relative shadow-xl rounded-[16px] border py-10 flex flex-col items-center justify-between"
          >
            {isPopular && (
              <div className="absolute right-[20px] md:right-[-70px] top-[-30px] flex items-start justify-center">
                <Image src="/icons/arrow.svg" alt="Arrow" width={62} height={30} className="relative top-1" />
                <span className="text-[#03055E] text-sm font-medium">Most Popular!</span>
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-center text-[#0A0A0A] font-semibold text-4xl lg:text-5xl">{price}</h2>
              <div className="w-full">
                <h3 className="text-center text-[#0A0A0A] font-semibold text-base md:text-lg lg:text-xl">{type}</h3>
                <p className="text-center text-[#727282]">who is this for?</p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col px-6">
              <div className="h-full flex flex-col items-start gap-4 py-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                      <Check className="text-[#26A6A4] h-4 w-4" />
                    </span>
                    <p className="text-[#727282] -mb-2 line-clamp-1">{feature}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-auto" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
