import { Container } from "@/components/root/ui/container";
import { Section } from "@/components/root/ui/section";
import { HeadingPage } from "@/components/root/ui/heading-page";

export const Hero = () => {
  return (
    <Section>
      <Container className="justify-center items-center gap-y-8 md:gap-y-9 lg:gap-y-10 text-center">
        <HeadingPage
          label="Pricing"
          title="Compare our plans and find yours"
          description="Transparent pricing that grows with your needs."
        />
      </Container>
    </Section>
  );
};
