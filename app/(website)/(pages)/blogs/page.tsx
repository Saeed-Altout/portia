import { CTA } from "@website/_components/sections";
import { AllBlogs, Hero, RecentBlogs } from "./_components";

export default function BlogsPage() {
  return (
    <main className="w-full">
      <Hero />
      <RecentBlogs />
      <AllBlogs />
      <CTA />
    </main>
  );
}
