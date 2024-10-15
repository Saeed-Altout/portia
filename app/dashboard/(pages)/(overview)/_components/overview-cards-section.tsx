import { OverviewCard } from "./overview-card";
import { overviewData } from "@/app/dashboard/constants";

export const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {overviewData.map((item, index) => (
        <OverviewCard key={index} initialData={item} />
      ))}
    </div>
  );
};
