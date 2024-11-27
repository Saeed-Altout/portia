import { CTA, FAQs, Features, Testimonials } from "@/components/sections";
import { Hero, Plans } from "./_components";

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
