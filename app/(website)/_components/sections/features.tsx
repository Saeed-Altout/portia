"use client";

import * as React from "react";

import { Section } from "@website/_components/ui/section";
import { Heading } from "@website/_components/ui/heading";
import { Container } from "@website/_components/ui/container";
import { FeatureCard } from "@website/_components/cards/feature-card";

import { useScrollStore } from "@website/hooks/scroll-to";

import { featuresData } from "@website/constants";

export const Features = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const scrollStore = useScrollStore();

  React.useEffect(() => {
    scrollStore.setSectionRef(sectionRef);
  }, []);

  return (
    <Section ref={sectionRef}>
      <Container className="gap-y-12 md:gap-y-16">
        <Heading
          title="What makes Portia.io Different?"
          description="We provide a lots of incredible features that you will need!"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} initialData={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
