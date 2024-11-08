import { Zap } from "lucide-react";

import { Section } from "@/app/(root)/_components/ui/section";
import { Container } from "@/app/(root)/_components/ui/container";
import { Heading } from "@/app/(root)/_components/ui/heading";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { featuresData } from "@/app/(root)/constants";

export const Features = () => {
  return (
    <Section>
      <Container className="items-start justify-between lg:flex-row gap-16">
        <div className="max-w-[360px] space-y-5">
          <Circle>
            <Icon icon={Zap} />
          </Circle>
          <Heading
            title="What makes Portia.io Different?"
            description="We provide a lots of incredible features that you will need!"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
          {featuresData.map(({ title, description }, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-xl capitalize">{title}</h3>
              <p className="text">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
