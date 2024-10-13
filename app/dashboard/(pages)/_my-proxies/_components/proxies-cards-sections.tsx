import { ProxiesCard } from "./proxies-card";
import { proxiesData } from "@/app/dashboard/constants";

export const ProxiesCardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {proxiesData.map((item, index) => (
        <ProxiesCard key={index} initialData={item} />
      ))}
    </div>
  );
};
