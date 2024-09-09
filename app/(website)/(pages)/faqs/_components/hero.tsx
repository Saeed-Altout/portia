import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section>
      <Container className="items-center justify-center text-center">
        <HeadingPage
          label="Support"
          title="FAQs"
          description="Need something cleared up? Here are our most frequently asked questions."
        />
      </Container>
    </Section>
  );
};
