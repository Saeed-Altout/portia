import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section>
      <Container className="justify-center items-center text-center">
        <HeadingPage
          title="Pricing plans"
          description="Transparent pricing that grows with your needs."
        />
      </Container>
    </Section>
  );
};
