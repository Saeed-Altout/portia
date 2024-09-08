import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section>
      <Container>
        <HeadingPage
          timestamp="Published 13 Jan 2022"
          title="A conversation with Lucy Bond"
          description="Lucy Bond is an interior designer who started her career in New Zealand, working for large architectural firms. We chatted to her about design and starting her own studio."
        />
      </Container>
    </Section>
  );
};
