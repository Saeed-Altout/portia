import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section>
      <Container className="items-center justify-center text-center">
        <HeadingPage
          label="Available Locations"
          title="Look at our various providers & Locations"
          description="We have a lot of proxy’s location that attach with you needs."
        />
      </Container>
    </Section>
  );
};
