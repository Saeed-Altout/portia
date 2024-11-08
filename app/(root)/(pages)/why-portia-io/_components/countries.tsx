import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { Heading } from "@/app/(root)/_components/ui/heading";
import { FlagBox } from "@/app/(root)/_components/ui/flag-box";

import { countriesData } from "@/app/(root)/constants";

export const Countries = () => {
  return (
    <Section>
      <Container className="items-start justify-between lg:flex-row gap-x-8 gap-y-6 lg:gap-y-12">
        <Heading
          label="countries"
          title="Supported Countries and IP Availability"
          description="Portia.io offers proxies in multiple countries, ensuring you have the global reach you need."
          className="max-w-[384px]"
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {countriesData.map(({ name, users, flagUrl }, index) => (
            <FlagBox key={index} name={name} flagUrl={flagUrl} users={users} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
