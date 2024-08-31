import { Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { featuresData } from "@website/constants";

export const Features = () => {
  return (
    <section className="max-container section space-y-16">
      <div className="flex items-start justify-between flex-col lg:flex-row gap-16">
        <div className="max-w-3xl sm:max-w-[362px] space-y-5 flex-1 relative">
          <p className="bg-[#B5B6F7] border-[8px] border-[#D4D4FF] w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <Zap className="text-primary h-5 w-5" />
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            What makes Portia.io Different ?
          </h1>
          <p>We provide a lots of incredible features that you will need!</p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* TODO: Update data from API */}
          {featuresData.map(({ title, description }, index) => (
            <Card key={index} className="shadow-none border-none">
              <CardContent className="space-y-[6px] px-0">
                <h3 className="font-medium text-[20px] capitalize">{title}</h3>
                <p>{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
