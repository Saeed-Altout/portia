import { Button } from "@/components/ui/button";
import { Heading } from "@website/_components/common/heading";

import React from "react";

export const CTA = () => {
  return (
    <section className="max-container section">
      <Heading
        title="Ready To Take Your Online Efficiency to the Next Level ?"
        description="Join over 40,000+ happy clients already growing with portia.io ."
        descriptionStyle="lg:text-xl lg:p-2"
      >
        <div className="flex items-center justify-center flex-col md:flex-row gap-5">
          <Button variant="outline" className="w-full">
            Contact us
          </Button>
          <Button className="w-full -order-1 md:order-1">Get Started</Button>
        </div>
      </Heading>
    </section>
  );
};
