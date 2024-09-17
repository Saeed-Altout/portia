import Link from "next/link";

import { plansData2 } from "@/app/_(website)/constants";

import { Section } from "@/app/_(website)/_components/ui/section";
import { Container } from "@/app/_(website)/_components/ui/container";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";
import { PlanDetailsCard } from "@/app/_(website)/_components/cards/plan-details-card";

export const Plans = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {plansData2.map((plan, index) => (
            <PlanDetailsCard key={index} initialData={plan} />
          ))}
        </div>

        <div className="flex items-center justify-center w-full pt-28">
          <Paragraph>Need more details about our plans ?</Paragraph>
          <Link href="/pricing" className="text-primary underline ml-2">
            check compare plans page
          </Link>
        </div>
      </Container>
    </Section>
  );
};
