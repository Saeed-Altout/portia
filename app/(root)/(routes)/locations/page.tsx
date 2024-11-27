import { Hero } from "./_components/hero";
import { Map } from "./_components/map";
import { Content } from "./_components/content";
import { CTA } from "./_components/cta";

export default function Locations() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Map />
      <Content />
      <CTA />
    </main>
  );
}
