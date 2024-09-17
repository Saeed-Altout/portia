import { HeadingSection } from "./sections/heading-section";
import { ModalsSections } from "./sections/modals-section";
import { StatisticSection } from "./sections/statistic-section";

export const OverviewClient = () => {
  return (
    <>
      <ModalsSections />
      <HeadingSection />
      <StatisticSection />
    </>
  );
};
