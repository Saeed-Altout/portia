"use client";
import * as React from "react";

import { Heading } from "@dashboard/_components/ui/heading";
import { PlanCard } from "@dashboard/_components/cards/plan-card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  pricingPlanData,
  plansData,
  durationsData,
} from "@dashboard/constants";
import { renderTheme } from "@dashboard/helpers/render-theme";

export default function PricingPlansPage() {
  const [plan, setPlan] = React.useState<"Basic" | "Standard" | "Premium">(
    "Basic"
  );
  const [duration, setDuration] = React.useState<
    "Hourly" | "Monthly" | "Yearly"
  >("Hourly");
  return (
    <>
      {/* Heading Section */}
      <Heading title="Welcome back, Jafar" label="Our Pricing plans" />
      {/* Content Section */}
      <div>
        {/* Tabs */}
        <div>
          <div className="hidden md:flex items-start justify-start flex-col md:flex-row gap-x-12">
            <div className="mb-6 flex space-x-4 bg-muted w-fit p-1 rounded-md">
              {plansData.map((tab) => (
                <div
                  role="button"
                  key={tab}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    plan === tab
                      ? "bg-white text-black-default"
                      : "bg-transparent text-muted-foreground"
                  }`}
                  onClick={() => setPlan(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="mb-6 flex space-x-4 bg-muted w-fit p-1 rounded-md">
              {durationsData.map((tab) => (
                <div
                  role="button"
                  key={tab}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    duration === tab
                      ? "bg-white text-black-default"
                      : "bg-transparent text-muted-foreground"
                  }`}
                  onClick={() => setDuration(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:hidden">
            <Select
              defaultValue={plan}
              onValueChange={(value: "Basic" | "Standard" | "Premium") =>
                setPlan(value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
              <SelectContent>
                {plansData.map((tab) => (
                  <SelectItem key={tab} value={tab}>
                    {tab}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              defaultValue={duration}
              onValueChange={(value: "Hourly" | "Monthly" | "Yearly") =>
                setDuration(value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Plan" />
              </SelectTrigger>
              <SelectContent>
                {durationsData.map((tab) => (
                  <SelectItem key={tab} value={tab}>
                    {tab}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Content */}
        <div className="grid gap-4">
          {pricingPlanData[plan][duration].map((item) => (
            <PlanCard
              initialData={item}
              theme={renderTheme(plan).theme}
              fill={renderTheme(plan).fill}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
