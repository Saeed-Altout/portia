import { Hero } from "./_components/hero";
import { Plans } from "./_components/plans";
import { CTA, FAQs, Features, Testimonials } from "@/components/sections";

export default function OurPlansPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Plans />
      <Features />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
