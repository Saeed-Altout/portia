import { HeadingPage } from "@/components/root/ui/heading-page";

export const Hero = () => {
  return (
    <section id="hero-pricing" className="w-full py-20">
      <div className="container space-y-12">
        <HeadingPage
          label="Support"
          title="FAQs"
          description="Need something cleared up? Here are our most frequently asked questions."
        />
      </div>
    </section>
  );
};
