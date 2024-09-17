import { featuresData } from "@/app/_(website)/constants";

import { Section } from "@/app/_(website)/_components/ui/section";
import { Container } from "@/app/_(website)/_components/ui/container";
import { Heading } from "@/app/_(website)/_components/ui/heading";
import { FeatureCard } from "@/app/_(website)/_components/cards/feature-card";

export const Features = () => {
  return (
    <Section>
      <Container className="gap-y-12 md:gap-y-16">
        <Heading
          title="What makes Portia.io Different?"
          description="We provide a lots of incredible features that you will need!"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} initialData={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
