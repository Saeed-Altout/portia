import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { plansData2 } from "@/config/constants";

export const Plans = () => {
  return (
    <section id="pricing plans" className="screen pb-24 space-y-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {plansData2.map(
          (
            { type, isPopular, price, description, message, features },
            index
          ) => (
            <div
              key={index}
              className="relative shadow-xl rounded-[16px] border flex flex-col items-center justify-between"
            >
              <div className="w-full min-h-min p-8 flex flex-col items-start justify-between gap-y-4">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[#727282] text-lg font-medium">{type}</p>
                  {isPopular && (
                    <span className="bg-[#D4D4FF] text-[#03055E] text-sm leading-[20px] py-1 px-3 rounded-[16px] font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-[#0A0A0A] font-semibold text-4xl md:text-5xl lg:text-6xl">
                  {price}
                  <span className="text-[#727282] text-base font-medium ml-2 tracking-wide">
                    per month
                  </span>
                </h3>
                <p className="text-[#727282] line-clamp-3 min-h-[80px]">
                  {description}
                </p>
                <div className="w-full flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">Get Started</Link>
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Link href="/contact-us">Contact sales</Link>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="h-full flex flex-col gap-6 p-8">
                {message && (
                  <div>
                    <h3 className="text-[#0A0A0A] font-semibold">FEATURES</h3>
                    <p className="text-[#727282]">{message}</p>
                  </div>
                )}
                <div className="h-full flex flex-col items-start gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="bg-[#B5B6F7] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                        <Check className="text-[#2628A6] h-4 w-4" />
                      </span>
                      <p className="text-[#727282] -mb-2 line-clamp-1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-[#727282]">Need more details about our plans?</p>
        <Link href="/pricing" className="text-[#111280] underline ml-2">
          check compare plans page
        </Link>
      </div>
    </section>
  );
};
