"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <section id="pricing plans" className="screen pb-24 space-y-28">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4",
          plans && plans?.data.length > 3 && "lg:grid-cols-4"
        )}
      >
        {isLoading &&
          !isSuccess &&
          [...Array(3)].map((_, index) => (
            <div
              key={index}
              className="shadow-xl rounded-[16px] border py-10 px-6 space-y-4"
            >
              <Skeleton className="h-8 w-40" />
              <div className="flex items-end gap-2">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-8 w-20" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-[70%]" />
              </div>

              <div className="w-full flex flex-col gap-4 py-10">
                <Skeleton className="h-8 w-40" />
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
              className="relative shadow-xl rounded-[16px] border flex flex-col items-center justify-between"
            >
              <div className="w-full min-h-min p-8 flex flex-col items-start justify-between gap-y-4">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[#727282] text-lg font-medium">
                    {plan.package.name} plan
                  </p>
                  {!!plan.is_popular && (
                    <span className="bg-[#D4D4FF] text-[#03055E] text-sm leading-[20px] py-1 px-3 rounded-[16px] font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <h3
                  className={cn(
                    "text-[#0A0A0A] font-semibold text-4xl",
                    plans.data.length < 3 && "md:text-5xl lg:text-6xl"
                  )}
                >
                  {plan.cost}$
                  <span className="font-medium text-lg">/{plan.plan}</span>
                </h3>
                <p className="text-[#727282] line-clamp-3 min-h-[80px]">
                  {plan.package.description}
                </p>
                <div className="w-full flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <Link href={ROUTES.DASHBOARD_HOME}>Get Started</Link>
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Link href={ROUTES.CONTACT_US}>Contact sales</Link>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="h-full flex flex-col gap-6 p-8">
                <h3 className="text-[#0A0A0A] font-semibold">FEATURES</h3>
                <div className="h-full flex flex-col items-start gap-4">
                  {plan.package.feature_groups.map((group, index) => (
                    <Fragment key={index}>
                      {group.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="bg-[#B5B6F7] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                            <Check className="text-[#2628A6] h-4 w-4" />
                          </span>
                          <p className="text-[#727282] -mb-2 line-clamp-2">
                            {feature.value}
                          </p>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      <motion.div
        className="w-full flex items-center justify-center flex-col md:flex-row gap-y-4"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={animationViewport}
        transition={{ duration: animationTransition.duration, delay: 0.2 }}
      >
        <p className="text-[#727282]">Need more details about our plans?</p>
        <Link href={ROUTES.OUR_PLANS} className="text-[#111280] underline ml-2">
          check compare plans page
        </Link>
      </motion.div>
    </section>
  );
};
