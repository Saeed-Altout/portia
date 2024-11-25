import { Container } from "@/app/(root)/_components/ui/container";
import { Section } from "@/app/(root)/_components/ui/section";
import { HeadingPage } from "@/app/(root)/_components/ui/heading-page";

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
