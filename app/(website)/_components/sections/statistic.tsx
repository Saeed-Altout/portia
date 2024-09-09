import * as React from "react";

import { cn } from "@/lib/utils";

import { statisticData } from "@website/constants";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { StatisticCard } from "@website/_components/cards/statistic-card";

export const Statistic = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Section className={cn(className)}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 w-full">
          {statisticData.map(({ value, name, description }, index) => (
            <StatisticCard
              key={index}
              value={value}
              name={name}
              description={description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
