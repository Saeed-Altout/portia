import { CTA, FAQs, Testimonials } from "@/components/sections";
import { Countries, Features, Hero } from "./_components";

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
