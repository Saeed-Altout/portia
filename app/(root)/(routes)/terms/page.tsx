import { Hero } from "./_components/hero";
import { Content } from "./_components/content";
import { CTA } from "@/components/root/sections";
import { Tabs } from "@/components/ui/tabs";

export default function TermsPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Tabs defaultValue="terms">
        <Hero />
        <Content />
      </Tabs>
      <CTA />
    </main>
  );
}
