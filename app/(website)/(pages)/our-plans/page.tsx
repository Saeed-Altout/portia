import CTA from "./_components/cta";

import { Plans } from "./_components/plans";
import { Features } from "../../_components/features";
import { Testimonials } from "../../_components/testimonials";
import { FAQs } from "../../_components/faqs";

export default function OurPlans() {
  return (
    <main>
      <Plans />
      <Features />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
