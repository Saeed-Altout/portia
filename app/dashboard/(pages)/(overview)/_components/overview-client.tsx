import { NewModalProxy } from "@/app/dashboard/_components/modals/new-proxy-modal";
import { HeadingSection } from "./sections/heading-section";
import { StatisticSection } from "./sections/statistic-section";

export const OverviewClient = () => {
  return (
    <>
      <NewModalProxy />
      <HeadingSection />
      <StatisticSection />
    </>
  );
};
