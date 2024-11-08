import {
  CTA,
  FAQs,
  Features,
  Statistic,
  Testimonials,
} from "@/app/(root)/_components/sections";
import { Map, Hero, Plans } from "./_components";

export default function HomePage() {
  return (
    <main className="w-full">
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
