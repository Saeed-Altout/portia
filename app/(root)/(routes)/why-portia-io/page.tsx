import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Countries } from "./_components/countries";
import { CTA, FAQs, Testimonials } from "@/components/sections";

export default function WhyPortiaIoPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <Countries />
      <FAQs />
      <CTA />
    </main>
  );
}
