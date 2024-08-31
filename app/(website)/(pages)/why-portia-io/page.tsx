import { Testimonials } from "../../_components/sections/testimonials";
import { FAQs } from "../../_components/sections/faqs";
import { CTA } from "../../_components/sections/cta";
import { Countries, Features, Hero } from "./_components";

export default function WhyPortiaIo() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Countries />
      <FAQs />
      <CTA />
    </main>
  );
}
