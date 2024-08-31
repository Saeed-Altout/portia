import {
  CTA,
  FAQs,
  Features,
  Statistic,
  Testimonials,
} from "@website/_components/sections";
import { Map, Hero, Plans } from "./_components";

export default function HomePage() {
  return (
    <main>
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

// TODO: Add interface to all cards features, plans and statistic.
