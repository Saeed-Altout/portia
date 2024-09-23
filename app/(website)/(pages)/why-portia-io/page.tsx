import { FAQs, CTA, Testimonials } from "@/app/(website)/_components/sections";
import { Countries, Features, Hero } from "./_components";

export default function WhyPortiaIoPage() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Testimonials />
      <Countries />
      <FAQs />
      <CTA />
    </main>
  );
}
