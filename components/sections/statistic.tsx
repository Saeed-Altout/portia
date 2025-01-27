"use client";

import { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { cn } from "@/lib/utils";

const statisticData = [
  {
    value: "40k+",
    name: "Happy Customers",
    description: "We've helped over 40k amazing customers.",
  },
  {
    value: "125+",
    name: "Proxy Locations",
    description:
      "Switch between proxies quickly to access global content seamlessly.",
  },
  {
    value: "99.9%",
    name: "Uptime",
    description:
      "Get proxies from different sources, like Portia's mobile network.",
  },
  {
    value: "200+",
    name: "5-star reviews",
    description: "We're proud of our 5-star rating with over 200 reviews.",
  },
];

export const Statistic = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const [counts, setCounts] = useState<number[]>(statisticData.map(() => 0));

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      const intervals: NodeJS.Timeout[] = [];

      statisticData.forEach((item, index) => {
        const targetValue = parseFloat(item.value.replace(/[^0-9.]/g, ""));
        const increment = Math.ceil(targetValue / 50);
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < targetValue) {
              newCounts[index] = Math.min(
                newCounts[index] + increment,
                targetValue
              );
            } else {
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 15);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isIntersecting]);

  return (
    <section id="statistic" ref={ref} className={cn("screen py-12", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {statisticData.map(({ value, name, description }, index) => (
          <div
            key={index}
            className="space-y-3 pt-4 sm:pt-0 border-t-2 border-[#111280] sm:border-transparent"
          >
            <span className="text-[#111280] font-semibold text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[72px]">
              {counts[index]}
              {value.includes(".")
                ? value.replace(/[0-9.]/g, "")
                : value.replace(/[0-9]/g, "")}
            </span>
            <div className="space-y-2">
              <h2 className="text-[#727282] sm:text-[#0A0A0A] text-lg md:text-xl font-medium">
                {name}
              </h2>
              <p className="text-[#727282] hidden sm:block">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
