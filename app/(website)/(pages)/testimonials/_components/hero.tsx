import { Button } from "@/components/ui/button";

import { Container } from "@/app/(website)/_components/ui/container";
import { Section } from "@/app/(website)/_components/ui/section";
import { HeadingPage } from "@/app/(website)/_components/ui/heading-page";

export const Hero = () => {
  return (
    <Section className="bg-[#F5F5FA]">
      <Container className="justify-center items-center gap-y-8 md:gap-y-9 lg:gap-y-10 text-center">
        <HeadingPage
          label="Testimonials"
          title="Why To Choose Portia.io?"
          description="At Portia.io, we strive to deliver exceptional proxy services to our
          customers. Our dedication to quality and customer satisfaction shines
          through in the feedback we receive."
        />
        <div className="space-x-3">
          <Button variant="outline">Visit Trustpilot</Button>
          <Button>Write Review</Button>
        </div>
      </Container>
    </Section>
  );
};
