import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/app/(website)/constants";
import { Heading } from "@/app/(website)/_components/common/heading";

export const Features = () => {
  return (
    <section className="max-container section space-y-16">
      <Heading
        title="What makes Portia.io Different?"
        description="We provide a lots of incredible features that you will need!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map(({ icon: Icon, title, description }, index) => (
          <Card key={index} className="shadow-none border-none">
            <CardHeader className="px-0">
              <CardTitle className="bg-[#B5B6F7] border-[8px] border-[#D4D4FF] w-[48px] h-[48px] flex items-center justify-center rounded-full">
                <Icon className="text-primary h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-[6px] px-0">
              <h3 className="font-medium text-[20px] capitalize">{title}</h3>
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
