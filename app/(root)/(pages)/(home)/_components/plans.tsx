import { Heading } from "@/app/(root)/_components/ui/heading";
import { PlanCard } from "@/app/(root)/_components/cards/plan-card";

import { plansData } from "@/app/(root)/constants";

export const Plans = () => {
  return (
    <section id="plans" className="container py-24 space-y-20">
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
    </section>
  );
};
