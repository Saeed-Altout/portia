import { Hero } from "./_components/hero";
import { Content } from "./_components/content";
import { CTA, FAQs } from "@/components/sections";

export default function PricingPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Content />
      <FAQs />
      <CTA />
    </main>
  );
}
