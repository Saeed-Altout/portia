import { Hero } from "./_components/hero";
import { Content } from "./_components/content";
import { CTA } from "@/components/sections";
import { Tabs } from "@/components/ui/tabs";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Tabs defaultValue="privacy-policy">
        <Hero />
        <Content />
      </Tabs>
      <CTA />
    </main>
  );
}
