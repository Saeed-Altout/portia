import { Heading } from "@/components/ui/heading";
import { Circle, Icon } from "@/components/ui/circle-icon";

import { featuresData } from "@/config/constants";

export const Features = () => {
  return (
    <section id="features" className="screen py-36 space-y-16">
      <Heading
        title="What makes Portia.io Different?"
        description="We provide a lots of incredible features that you will need!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {featuresData.map(({ title, description, icon }, index) => (
          <div key={index} className="space-y-5">
            <Circle>
              <Icon icon={icon} />
            </Circle>
            <div className="space-y-2">
              <h2 className="text-[#0A0A0A] text-lg md:text-xl font-medium">{title}</h2>
              <p className="text-[#727282]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
