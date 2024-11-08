import Link from "next/link";

import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { PlanDetailsCard } from "@/app/(root)/_components/cards/plan-details-card";

import { plansData2 } from "@/app/(root)/constants";

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
          <p className="text">Need more details about our plans ?</p>
          <Link href="/pricing" className="text-primary underline ml-2">
            check compare plans page
          </Link>
        </div>
      </Container>
    </Section>
  );
};
