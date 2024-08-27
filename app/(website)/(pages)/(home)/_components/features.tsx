import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuresData } from "@/app/(website)/constants";

export const Features = () => {
  return (
    <section className="max-container section space-y-5">
      <div className="space-y-1">
        <h1 className="text-4xl text-black-primary font-medium">
          What makes Portia.io Different ?
        </h1>
        <p className="text-gray-primary text-base">
          We provide a lots of incredible features that you will need!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map(({ icon: Icon, title, description }, index) => (
          <Card key={index} className="shadow-none border-none">
            <CardHeader>
              {/* TODO: Update style circle */}
              <CardTitle className="bg-primary/10 bg-opacity-50 w-fit p-2 rounded-full">
                <div className="bg-primary/20 bg-opacity-50 w-fit p-2 rounded-full">
                  <Icon className="text-primary h-5 w-5" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <h3 className="font-medium text-black-primary text-[18px] capitalize">
                {title}
              </h3>
              <p className="text-gray-primary text-base">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
