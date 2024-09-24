import * as React from "react";
import Image from "next/image";

import { Container } from "@website/_components/ui/container";
import { Section } from "@website/_components/ui/section";

export const Map = () => {
  return (
    <Section>
      <Container className="relative h-[250px] md:h-[400px] lg:h-[750px]">
        <Image
          src="/icons/map.svg"
          alt="Map"
          className="object-contain"
          fill
          priority
        />
      </Container>
    </Section>
  );
};
