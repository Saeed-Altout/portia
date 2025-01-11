import { Hero } from "./_components/hero";
import { Plans } from "./_components/plans";
import {
  CTA,
  FAQs,
  Features,
  Statistic,
  Testimonials,
  Map,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Map />
      <Statistic />
      <Features />
      <Testimonials />
      <Plans />
      <FAQs />
      <CTA />
    </main>
  );
}
