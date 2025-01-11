"use client";

import { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { statisticData } from "@/constants/constants";

export const Statistic = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const [counts, setCounts] = useState<number[]>(statisticData.map(() => 0));
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      const intervals: NodeJS.Timeout[] = [];
      statisticData.forEach((item, index) => {
        const targetValue = parseInt(item.value.replace(/\D/g, ""));
        const increment = Math.ceil(targetValue / 100);
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              targetValue
            );
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
              {value.replace(/[0-9]/g, "")}
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
