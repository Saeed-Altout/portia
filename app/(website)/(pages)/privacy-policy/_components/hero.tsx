import { Button } from "@/components/ui/button";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section className="bg-[#F5F5FA]">
      <Container className="items-center justify-center text-center gap-y-10">
        <HeadingPage
          label="Privacy Policy"
          title="We care about your privacy"
          description="Your privacy is important to us at Portia. We respect your privacy regarding any information we may collect from you across our website."
        />

        <div className="bg-[#E9E9F2] p-1.5 rounded-[8px] space-x-2">
          <Button variant="ghost" className="bg-white text-lg">
            Human-friendly
          </Button>
          <Button
            variant="ghost"
            className="text-gray-primary text-lg bg-transparent hover:bg-transparent"
          >
            Legal nonsense
          </Button>
        </div>
      </Container>
    </Section>
  );
};
