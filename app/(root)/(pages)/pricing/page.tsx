import { CTA, FAQs } from "@/app/(root)/_components/sections";
import { Hero, Content } from "./_components";

export default function PricingPage() {
  return (
    <main className="w-full">
      <Hero />
      <Content />
      <FAQs />
      <CTA />
    </main>
  );
}
