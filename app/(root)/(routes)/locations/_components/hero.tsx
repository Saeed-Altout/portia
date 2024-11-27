import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";
import { HeadingPage } from "@/components/root/ui/heading-page";

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
