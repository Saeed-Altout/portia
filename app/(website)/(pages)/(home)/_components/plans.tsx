import { Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { plansData } from "@/app/(website)/constants";
import { Heading } from "@/app/(website)/_components/heading";

export const Plans = () => {
  return (
    <section className="max-container section space-y-10">
      <Heading
        heading="Pricing"
        title="Simple, transparent pricing"
        description="We believe Portia should be accessible to all people, no matter their usage."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plansData.map(({ price, type, features }, index) => (
          <Card key={index}>
            <CardHeader className="text-center">
              <CardTitle className="font-medium lg:text-4xl">
                ${price}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="text-center space-y-2">
                <h3 className="font-medium text-black-primary text-[18px]">
                  {type}
                </h3>
                <p className="text-gray-primary text-base">who is this for?</p>
              </div>
              <div className="flex flex-col gap-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-x-2"
                  >
                    <span className="bg-[#B5F7F6] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                      <Check className="text-[#26A6A4] h-4 w-4" />{" "}
                    </span>
                    <p className="text-gray-primary text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {/* TODO: Update functionally of card plan button */}
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
