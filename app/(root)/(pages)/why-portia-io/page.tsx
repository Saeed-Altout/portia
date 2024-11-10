import { FAQs, CTA, Testimonials } from "@/app/(root)/_components/sections";
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
