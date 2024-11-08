import { Heading } from "@/app/(root)/_components/ui/heading";
import { FeatureCard } from "@/app/(root)/_components/cards/feature-card";

import { featuresData } from "@/app/(root)/constants";

export const Features = () => {
  return (
    <section id="features" className="container py-20 space-y-10">
      <Heading
        title="What makes Portia.io Different?"
        description="We provide a lots of incredible features that you will need!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} initialData={feature} />
        ))}
      </div>
    </section>
  );
};
