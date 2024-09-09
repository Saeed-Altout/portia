import { plansData } from "@website/constants";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { Heading } from "@website/_components/ui/heading";
import { PlanCard } from "@website/_components/cards/plan-card";

export const Plans = () => {
  return (
    <Section>
      <Container className="space-y-24">
        <Heading
          label="Pricing"
          title="Simple, transparent pricing"
          description="We believe Portia should be accessible to all people, no matter their usage."
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-x-8">
          {plansData.map((plan, index) => (
            <PlanCard key={index} initialData={plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
