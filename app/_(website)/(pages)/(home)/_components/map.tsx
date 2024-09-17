import Image from "next/image";

import { Container } from "@/app/_(website)/_components/ui/container";
import { Section } from "@/app/_(website)/_components/ui/section";

export const Map = () => {
  return (
    <Section>
      <Container className="relative h-[250px] md:h-[450px] lg:h-[800px]">
        <Image
          src="/icons/map.svg"
          alt="Map"
          className="w-full h-full object-contain"
          fill
        />
      </Container>
    </Section>
  );
};