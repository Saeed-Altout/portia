import {
  CTA,
  FAQs,
  Features,
  Statistic,
  Testimonials,
} from "@/app/_(website)/_components/sections";
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

// TODO: Hero bLog page. "Design"
// TODO: Select country and number. "Libs"
// TODO: Animate card customers.
// TODO: Button in hero of pricey page. "Design"
// TODO: Build locations page. "Not yet"
