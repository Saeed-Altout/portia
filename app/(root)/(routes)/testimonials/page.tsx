import { Hero } from "./_components/hero";
import { Customers } from "./_components/customers";
import { CTA } from "@/components/sections";

export default function TestimonialsPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <Customers />
      <CTA />
    </main>
  );
}
