import { cn } from "@/lib/utils";
import { statisticData } from "@/config/constants";

export const Statistic = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <section id="statistic" className={cn("screen py-12", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {statisticData.map(({ value, name, description }, index) => (
          <div key={index} className="space-y-3 pt-4 sm:pt-0 border-t-2 border-[#111280] sm:border-transparent">
            <span className="text-[#111280] font-semibold text-5xl lg:leading-[65px] xl:text-6xl xl:leading-[72px]">
              {value}
            </span>
            <div className="space-y-2">
              <h2 className="text-[#727282] sm:text-[#0A0A0A] text-lg md:text-xl font-medium">{name}</h2>
              <p className="text-[#727282] hidden sm:block">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
