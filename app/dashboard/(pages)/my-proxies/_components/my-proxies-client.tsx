import { ContentSection } from "./sections/content-section";
import { HeadingSection } from "./sections/heading-section";
import { ModalsSections } from "./sections/modals-section";
import { StatisticSection } from "./sections/statistic-section";

export const MyProxiesClient = () => {
  return (
    <>
      <ModalsSections />
      <HeadingSection />
      <StatisticSection />
      <ContentSection />
    </>
  );
};
