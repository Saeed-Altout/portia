import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { HeadingPage } from "@/app/(root)/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section className="bg-[#F5F5FA]">
      <Container className="justify-center items-center text-center">
        <HeadingPage
          label="Why Portia.io?"
          title="Why To Choose Portia.io?"
          description="At Portia.io, we are driven by the desire to provide a reliable,
          affordable, and flexible proxy service that meets the needs of our
          diverse clientele. Our journey began with a vision to create a proxy
          service that eliminates the common frustrations users face with
          traditional providers."
        />
      </Container>
    </Section>
  );
};
