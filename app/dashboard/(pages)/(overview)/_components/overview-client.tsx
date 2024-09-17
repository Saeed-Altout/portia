import { HeadingSection } from "./sections/heading-section";
import { StatisticSection } from "./sections/statistic-section";
import { ActivateNewProxyModal } from "@dashboard/_components/modals/activate-new-proxy-modal";

export const OverviewClient = () => {
  return (
    <>
      <ActivateNewProxyModal />
      <HeadingSection />
      <StatisticSection />
    </>
  );
};
