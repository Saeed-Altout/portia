import {
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
    </main>
  );
}

// TODO: Update style hading section in all screens.
// TODO: Create heading and card component.
// TODO: Add interface to all cards features, plans and statistic.
// TODO: Create index.ts in components file and export all sections from on file.
// TODO: Add pricing text and Most popular arrow in plans section.
// TODO: Edit style card of plans section.
// TODO: Import fonts as files to fix changes size.
// TODO: Add line when above each card in statistics section in mobile screen.
// TODO: Add line effect under Mobile Proxies in hero section.
