import Link from "next/link";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { plansData2 } from "@website/constants";

export const Plans = () => {
  return (
    <section className="max-container section space-y-16">
      <div className="space-y-5 flex-1 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Pricing plans
        </h1>
        <p>Transparent pricing that grows with your needs.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plansData2.map(
          ({ price, status, type, message, features, description }, index) => (
            <Card key={index} className="drop-shadow-xl rounded-[16px]">
              <CardHeader className="space-y-5">
                <div className="flex items-center justify-between">
                  <p>{type}</p>
                  {status && (
                    <span className="bg-[#D4D4FF] px-[14px] py-[3px] rounded-full text-sm font-medium">
                      {status}
                    </span>
                  )}
                </div>
                <CardTitle className="font-semibold text-4xl md:text-5xl lg:text-6xl">
                  {price}
                  <span className="text-base font-medium text-gray-primary ml-2 tracking-wide">
                    per month
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p>{description}</p>
                <div className="flex flex-col gap-4">
                  {/* TODO: Update functionally of card plan button */}
                  <Button className="w-full">Get Started</Button>
                  <Button className="w-full" variant="outline">
                    Contact sales
                  </Button>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex-col items-start gap-8 pt-6">
                {message && (
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-semibold">FEATURES</h3>
                    <p>{message}</p>
                  </div>
                )}
                <div className="flex flex-col gap-y-5">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start gap-x-2"
                    >
                      <span className="bg-[#B5B6F7] h-5 w-5 rounded-full p-[3px] flex justify-center items-center">
                        <Check className="text-primary h-4 w-4" />{" "}
                      </span>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>

      <div className="flex items-center justify-center w-full py-12">
        <p>Need more details about our plans ?</p>
        <Button variant="link" asChild className="px-2 underline" size="sm">
          {/* TODO: Update href link of check compare plans */}
          <Link href="/" className="text-primary">
            check compare plans page
          </Link>
        </Button>
      </div>
    </section>
  );
};
