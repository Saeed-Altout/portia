import { Section } from "@/app/(website)/_components/ui/section";
import { Container } from "@/app/(website)/_components/ui/container";

import { TableMain, TableMobile } from ".";

export const Content = () => {
  return (
    <Section>
      <Container>
        <TableMain />
        <TableMobile />
      </Container>
    </Section>
  );
};