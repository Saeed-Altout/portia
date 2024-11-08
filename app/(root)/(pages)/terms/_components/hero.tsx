import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { HeadingPage } from "@/app/(root)/_components/ui/heading-page";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Hero = () => {
  return (
    <Section className="bg-[#F5F5FA]">
      <Container className="items-center justify-center text-center gap-y-10">
        <HeadingPage
          label="Privacy Policy"
          title="We care about your privacy"
          description="Your privacy is important to us at Portia. We respect your privacy regarding any information we may collect from you across our website."
        />

        <TabsList className="bg-[#E9E9F2] h-11 p-2">
          <TabsTrigger value="privacy-policy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="terms">Terms</TabsTrigger>
        </TabsList>
      </Container>
    </Section>
  );
};
