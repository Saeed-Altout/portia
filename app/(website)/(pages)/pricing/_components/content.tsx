import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";

import { TableMain, TableMobile } from "../_components";

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
