import { CTA } from "@website/_components/sections";
import { Content, Hero } from "./_components";
import { Tabs } from "@/components/ui/tabs";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full">
      <Tabs>
        <Hero />
        <Content />
      </Tabs>
      <CTA />
    </main>
  );
}
