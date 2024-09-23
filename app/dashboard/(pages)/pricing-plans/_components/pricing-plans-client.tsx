"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PlanCard } from "@dashboard/_components/cards/plan-card";

export const PricingPlansClient = () => {
  const [plan, setPlan] = useState<"Basic" | "Standard" | "Premium">("Basic");
  const [duration, setDuration] = useState<"Hourly" | "Monthly" | "Yearly">(
    "Hourly"
  );

  const plans = ["Basic", "Standard", "Premium"] as const;
  const durations = ["Hourly", "Monthly", "Yearly"] as const;

  const data = {
    Basic: {
      Hourly: [
        {
          id: 1,
          name: "2 Hours/Basic plan",
          description: "talk about your offer here.",
          price: "2.00$",
        },
        {
          id: 2,
          name: "4 Hours/Basic plan",
          description: "talk about your offer here.",
          price: "3.50$",
        },
        {
          id: 3,
          name: "6 Hours/Basic plan",
          description: "talk about your offer here.",
          price: "5.00$",
        },
        {
          id: 4,
          name: "8 Hours/Basic plan",
          description: "talk about your offer here.",
          price: "6.50$",
        },
      ],
      Monthly: [
        {
          id: 5,
          name: "1 Month/Basic plan",
          description: "talk about your offer here.",
          price: "30.00$",
        },
        {
          id: 6,
          name: "3 Months/Basic plan",
          description: "talk about your offer here.",
          price: "80.00$",
        },
        {
          id: 7,
          name: "6 Months/Basic plan",
          description: "talk about your offer here.",
          price: "150.00$",
        },
        {
          id: 8,
          name: "12 Months/Basic plan",
          description: "talk about your offer here.",
          price: "280.00$",
        },
      ],
      Yearly: [
        {
          id: 9,
          name: "1 Year/Basic plan",
          description: "talk about your offer here.",
          price: "300.00$",
        },
        {
          id: 10,
          name: "2 Years/Basic plan",
          description: "talk about your offer here.",
          price: "580.00$",
        },
      ],
    },
    Standard: {
      Hourly: [
        {
          id: 11,
          name: "2 Hours/Standard plan",
          description: "talk about your offer here.",
          price: "3.00$",
        },
        {
          id: 12,
          name: "4 Hours/Standard plan",
          description: "talk about your offer here.",
          price: "5.50$",
        },
        {
          id: 13,
          name: "6 Hours/Standard plan",
          description: "talk about your offer here.",
          price: "7.50$",
        },
        {
          id: 14,
          name: "8 Hours/Standard plan",
          description: "talk about your offer here.",
          price: "9.00$",
        },
      ],
      Monthly: [
        {
          id: 15,
          name: "1 Month/Standard plan",
          description: "talk about your offer here.",
          price: "50.00$",
        },
        {
          id: 16,
          name: "3 Months/Standard plan",
          description: "talk about your offer here.",
          price: "140.00$",
        },
        {
          id: 17,
          name: "6 Months/Standard plan",
          description: "talk about your offer here.",
          price: "270.00$",
        },
        {
          id: 18,
          name: "12 Months/Standard plan",
          description: "talk about your offer here.",
          price: "500.00$",
        },
      ],
      Yearly: [
        {
          id: 19,
          name: "1 Year/Standard plan",
          description: "talk about your offer here.",
          price: "500.00$",
        },
        {
          id: 20,
          name: "2 Years/Standard plan",
          description: "talk about your offer here.",
          price: "950.00$",
        },
      ],
    },
    Premium: {
      Hourly: [
        {
          id: 21,
          name: "2 Hours/Premium plan",
          description: "talk about your offer here.",
          price: "5.00$",
        },
        {
          id: 22,
          name: "4 Hours/Premium plan",
          description: "talk about your offer here.",
          price: "9.50$",
        },
        {
          id: 23,
          name: "6 Hours/Premium plan",
          description: "talk about your offer here.",
          price: "12.50$",
        },
        {
          id: 24,
          name: "8 Hours/Premium plan",
          description: "talk about your offer here.",
          price: "16.00$",
        },
      ],
      Monthly: [
        {
          id: 25,
          name: "1 Month/Premium plan",
          description: "talk about your offer here.",
          price: "90.00$",
        },
        {
          id: 26,
          name: "3 Months/Premium plan",
          description: "talk about your offer here.",
          price: "250.00$",
        },
        {
          id: 27,
          name: "6 Months/Premium plan",
          description: "talk about your offer here.",
          price: "450.00$",
        },
        {
          id: 28,
          name: "12 Months/Premium plan",
          description: "talk about your offer here.",
          price: "800.00$",
        },
      ],
      Yearly: [
        {
          id: 29,
          name: "1 Year/Premium plan",
          description: "talk about your offer here.",
          price: "800.00$",
        },
        {
          id: 30,
          name: "2 Years/Premium plan",
          description: "talk about your offer here.",
          price: "1500.00$",
        },
      ],
    },
  } as const;

  const renderTheme = (plan: "Basic" | "Standard" | "Premium") => {
    if (plan === "Basic") {
      return {
        fill: "primary",
        theme: "primary",
      };
    } else if (plan === "Standard") {
      return {
        fill: "danger",
        theme: "danger",
      };
    } else if (plan === "Premium") {
      return {
        fill: "muted",
        theme: "muted",
      };
    } else {
      return {
        fill: "primary",
        theme: "primary",
      };
    }
  };
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-sm text-gray-primary">Our Pricing plans</h2>
        <h3 className="text-2xl md:text-3xl font-medium">
          explore our variety plans
        </h3>
      </div>

      <div className="hidden md:flex items-start justify-start flex-col md:flex-row gap-x-12">
        <div className="mb-6 flex space-x-4 bg-muted w-fit p-1 rounded-md">
          {plans.map((tab) => (
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
          {durations.map((tab) => (
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
            {plans.map((tab) => (
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
            {durations.map((tab) => (
              <SelectItem key={tab} value={tab}>
                {tab}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {data[plan][duration].map((item) => (
          <PlanCard
            initialData={item}
            theme={renderTheme(plan).theme}
            fill={renderTheme(plan).fill}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};
