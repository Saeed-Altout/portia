"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetOffersPlansQuery } from "@/services/offers/hooks";
import { ROUTES } from "@/config/constants";
import {
  textVariants,
  animationTransition,
  animationViewport,
} from "@/config/animations";

export const Plans = () => {
  const { data: plans, isLoading, isSuccess } = useGetOffersPlansQuery();

  return (
    <section id="plans" className="screen py-24 space-y-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ duration: animationTransition.duration }}
      >
        <Heading
          label="Pricing"
          title="Simple, transparent pricing"
          description="We believe Portia should be accessible to all people, no matter their usage."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {isLoading &&
          !isSuccess &&
          [...Array(3)].map((_, index) => (
            <div
              key={index}
              className="shadow-xl rounded-[16px] border py-10 px-6 space-y-4"
            >
              <div className="flex items-end justify-center gap-2">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-8 w-20" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-40 mx-auto" />
                <p className="flex justify-center items-center flex-col gap-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-[70%]" />
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 py-10">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-full flex items-center gap-2">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-6 w-full" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-12 w-full" />
            </div>
          ))}

        {isSuccess &&
          plans.data.map((plan, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={animationViewport}
              transition={{
                duration: animationTransition.duration,
                delay: index * 0.1,
              }}
              className="relative shadow-xl rounded-[16px] border py-10 flex flex-col items-center justify-between"
            >
              {!!plan.is_popular && (
                <div className="absolute right-[20px] md:right-[-70px] top-[-30px] flex items-start justify-center">
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow"
                    width={62}
                    height={30}
                    className="relative top-1"
                  />
                  <span className="text-[#03055E] text-sm font-medium">
                    Most Popular!
                  </span>
                </div>
              )}
              <div className="space-y-4">
                <h2 className="text-center text-[#0A0A0A] font-semibold text-4xl lg:text-5xl">
                  {plan.cost}$
                  <span className="font-medium text-lg">/{plan.plan}</span>
                </h2>
                <div className="w-full">
                  <h3 className="text-center text-[#0A0A0A] font-semibold text-base md:text-lg lg:text-xl">
                    {plan.package.name}
                  </h3>
                  <p className="text-center text-[#727282]">
                    {plan.package.description}
                  </p>
                </div>
              </div>
              <div className="h-full w-full flex flex-col px-6">
                <div className="h-full flex flex-col items-start gap-4 py-8">
                  {plan.package.feature_groups.map((group, index) => (
                    <Fragment key={index}>
                      {group.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                            <Check className="text-[#26A6A4] h-4 w-4" />
                          </span>
                          <p className="text-[#727282] -mb-2 line-clamp-2">
                            {feature.value}
                          </p>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
                <Button className="w-full mt-auto" asChild>
                  <Link href={ROUTES.DASHBOARD_HOME}>Get Started</Link>
                </Button>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
