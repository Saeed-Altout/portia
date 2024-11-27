"use client";

import Link from "next/link";
import { CircleHelp } from "lucide-react";
import { Key, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { useGetOffers } from "@/hooks";

export const Content = () => {
  const [features, setFeatures] = useState<any[]>([]);
  const { data: offers, isSuccess, isLoading } = useGetOffers();

  useEffect(() => {
    if (isSuccess) {
      const features = offers?.data?.[0]?.package?.feature_groups?.[0]?.features?.map((feature) => ({
        name: feature.name,
        description: feature.description,
      }));

      setFeatures(features);
    }
  }, [isSuccess, offers]);

  return (
    <TooltipProvider>
      <section id="offers-table" className="screen w-full py-20 space-y-12">
        {(isLoading || !isSuccess) && (
          <div className="w-full grid grid-cols-1 md:grid-cols-4">
            {[...Array(3)].map((_, offerIndex) => (
              <div key={offerIndex} className={cn(offerIndex === 0 && "col-span-1 md:col-span-2")}>
                <div
                  className={cn(
                    "min-h-[320px] flex justify-start flex-col items-center",
                    offerIndex === 0 && "md:w-[50%] md:ml-auto",
                  )}
                >
                  <div className="w-full flex justify-start items-center gap-x-2 py-6 px-4 border-b">
                    <Skeleton className="h-6 w-32 rounded-md" />
                    <Skeleton className="h-8 w-20 rounded-full" />
                  </div>
                  <div className="w-full flex-1 flex flex-col justify-between items-start gap-y-6 py-6 px-4">
                    <div className="flex items-end justify-start gap-x-2 w-full">
                      <Skeleton className="h-20 w-[50%] rounded-md" />
                      <Skeleton className="h-5 w-[20%] rounded-md" />
                    </div>
                    <Skeleton className="h-5 w-full rounded-md" />
                    <Skeleton className="h-5 w-[70%] rounded-md" />
                    <Skeleton className="h-12 w-full rounded-md" />
                  </div>
                </div>
                {[...Array(5)]?.map((_, groupIndex) => (
                  <ul key={groupIndex} className="flex flex-col border-b">
                    <li
                      className={cn(
                        "py-6 px-4 flex justify-end md:justify-center items-center  odd:bg-white even:bg-[#f5f5faa6]",
                        offerIndex !== 0 && "before:md:hidden",
                      )}
                      data-content={""}
                    ></li>
                    {[...Array(3)].map((_, featureIndex) => (
                      <li
                        className={cn(
                          "py-6 px-4 flex justify-end md:justify-center items-center odd:bg-white even:bg-[#f5f5faa6]",
                          offerIndex !== 0 && "before:md:hidden",
                        )}
                        data-content={""}
                        key={featureIndex}
                      >
                        <Skeleton className={cn("h-5 w-20 rounded-md mr-auto", offerIndex !== 0 && "md:hidden")} />
                        <span className={cn(offerIndex === 0 && "md:w-1/2 md:ml-auto")}>
                          <Skeleton className="h-5 w-10 rounded-md mx-auto" />
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            ))}
          </div>
        )}
        {isSuccess && (
          <div className={cn("w-full grid grid-cols-1", `md:grid-cols-${offers.data.length + 1}`)}>
            <div className="flex-col hidden md:flex">
              {/* Heading */}
              <div className="h-[350px]" />
              {/* Body */}
              <ul className="flex-1 h-full border-b">
                {features.map((feature: { name: string; description: string }, index: Key) => (
                  <li
                    key={index}
                    className="h-20 px-4 py-2 odd:bg-[#ffffff] even:bg-[#F5F5FA] flex justify-start items-center font-medium whitespace-nowrap"
                  >
                    {feature.name}
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleHelp className="h-4 w-4 text-gray-500 ml-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
            {/* Offers */}
            {offers.data.map((offer, index) => (
              <div className="flex flex-col" key={index}>
                {/* Heading */}
                <div className="h-[350px]">
                  <div className="flex items-center gap-x-2 py-6 px-4 border-b">
                    <h3 className="text-xl font-semibold leading-8">{offer.package.name}</h3>
                    {!!offer.is_popular && (
                      <span className="bg-[#D4D4FF] text-primary px-5 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between items-start gap-y-6 py-6 px-4">
                    <h3 className="font-semibold text-3xl lg:text-5xl">
                      {offer.cost}$
                      <span className="text-sm font-medium text-gray-500 ml-2 tracking-wide text-nowrap">
                        {offer.plan}
                      </span>
                    </h3>
                    <p className="text-sm flex-1">{offer.package.description}</p>
                    <Button className="w-full" asChild>
                      <Link href="/">Get started</Link>
                    </Button>
                  </div>
                </div>
                {/* Body */}
                <div className="flex-1">
                  <div className="h-full">
                    {offer.package.feature_groups.map((feature_group, index) => (
                      <ul key={index} className="border-b">
                        {feature_group.features.map((feature, index) => (
                          <li
                            key={index}
                            className="h-20 px-4 py-2 odd:bg-[#ffffff] even:bg-[#F5F5FA] flex justify-between md:justify-center items-center gap-10"
                          >
                            <span className="w-fit whitespace-nowrap md:sr-only text-left font-medium text-sm">
                              {feature.name}
                              <Tooltip>
                                <TooltipTrigger>
                                  <CircleHelp className="h-4 w-4 text-gray-500 ml-2" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs">{feature.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </span>
                            <div className="w-full md:w-full line-clamp-3 text-right md:text-center text-sm">
                              {feature.value === "true" && (
                                <span
                                  className="text-[#26A6A4] bg-[#B5F7F6] ml-auto md:mx-auto rounded-full w-6 h-6 flex justify-center items-center"
                                  aria-label="Checked"
                                >
                                  ✓
                                </span>
                              )}
                              {["false", "null"].includes(feature.value ?? "false") && (
                                <span aria-label="Not Available">✗</span>
                              )}
                              {typeof feature.value === "string" &&
                                !["true", "false", "null"].includes(feature.value) && <span>{feature.value}</span>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </TooltipProvider>
  );
};
