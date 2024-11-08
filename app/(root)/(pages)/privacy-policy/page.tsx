import { CTA } from "@/app/(root)/_components/sections";
import { Content, Hero } from "./_components";
import { Tabs } from "@/components/ui/tabs";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full">
      <Tabs defaultValue="privacy-policy">
        <Hero />
        <Content />
      </Tabs>
      <CTA />
    </main>
  );
}
