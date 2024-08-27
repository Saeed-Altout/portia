import { Hero } from "./_components/hero";
import { Map } from "./_components/map";
import { Statistic } from "./_components/statistic";
import { Features } from "./_components/features";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Map />
      <Statistic />
      <Features />
    </main>
  );
}
