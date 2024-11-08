import { CTA } from "@/app/(root)/_components/sections";
import { Content, Hero } from "./_components";
import { Tabs } from "@/components/ui/tabs";

export default function TermsPage() {
  return (
    <main className="w-full">
      <Tabs defaultValue="terms">
        <Hero />
        <Content />
      </Tabs>
      <CTA />
    </main>
  );
}
