import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { Paragraph } from "@website/_components/ui/paragraph";

import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <Section>
      <Container className="lg:flex-row justify-between gap-8">
        <div className="space-y-4 lg:space-y-5 basis-2/3">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Ready To Take Your Online Efficiency to the Next Level ?
          </h1>
          <Paragraph size="lg" className="max-w-3xl lg:text-xl">
            Join over 40,000+ happy clients already growing with portia.io.
          </Paragraph>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-end gap-3 basis-1/3">
          <Button variant="outline" className="w-full md:w-fit">
            Contact us
          </Button>
          <Button className="w-full md:w-fit -order-1 md:order-1">
            Get Started
          </Button>
        </div>
      </Container>
    </Section>
  );
};
