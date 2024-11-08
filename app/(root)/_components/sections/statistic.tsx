import { cn } from "@/lib/utils";
import { StatisticCard } from "@/app/(root)/_components/cards/statistic-card";

import { statisticData } from "@/app/(root)/constants";

export const Statistic = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section id="statistic" className={cn("container py-24", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statisticData.map((item, index) => (
          <StatisticCard key={index} initialData={item} />
        ))}
      </div>
    </section>
  );
};
