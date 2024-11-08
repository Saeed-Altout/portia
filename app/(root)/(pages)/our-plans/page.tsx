import {
  CTA,
  FAQs,
  Features,
  Testimonials,
} from "@/app/(root)/_components/sections";
import { Hero, Plans } from "./_components";

export default function OurPlansPage() {
  return (
    <main className="w-full">
      <Hero />
      <Plans />
      <Features />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
