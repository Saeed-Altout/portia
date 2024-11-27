import { Zap } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { featuresData } from "@/constants";

export const Features = () => {
  return (
    <section id="features" className="screen flex flex-col md:flex-row gap-x-16 gap-y-12 py-24">
      <div className="w-full max-w-[362.67px]">
        <Heading
          icon={Zap}
          title="What makes Portia.io Different?"
          description="We provide a lots of incredible features that you will need!"
        />
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
        {featuresData.map(({ title, description }, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-[#0A0A0A] font-medium text-xl capitalize">{title}</h3>
            <p className="text-[#727282]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
