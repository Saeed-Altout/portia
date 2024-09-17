import { Zap } from "lucide-react";

import { featuresData } from "@/app/_(website)/constants";

import { Icon } from "@/app/_(website)/_components/ui/icon";
import { Section } from "@/app/_(website)/_components/ui/section";
import { Container } from "@/app/_(website)/_components/ui/container";
import { Paragraph } from "@/app/_(website)/_components/ui/paragraph";
import { Heading } from "@/app/_(website)/_components/ui/heading";

export const Features = () => {
  return (
    <Section>
      <Container className="items-start justify-between lg:flex-row gap-16">
        <div className="max-w-[360px] space-y-5">
          <Icon>
            <Zap className="text-primary h-5 w-5" />
          </Icon>
          <Heading
            title="What makes Portia.io Different ?"
            description="We provide a lots of incredible features that you will need!"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
          {featuresData.map(({ title, description }, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-xl capitalize">{title}</h3>
              <Paragraph>{description}</Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
