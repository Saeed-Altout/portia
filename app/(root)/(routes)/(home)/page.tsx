import { Map, Hero, Plans } from "./_components";
import { CTA, FAQs, Features, Statistic, Testimonials } from "@/components/sections";

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
