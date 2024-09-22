import * as React from "react";

import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

interface StepOneProps {
  isLoading?: boolean;
}

export const StepOne = ({ isLoading }: StepOneProps) => {
  const planData = [
    { value: "hourly", label: "Hourly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const amountData = [
    { value: "10h", label: "10 h" },
    { value: "20h", label: "20 h" },
    { value: "30h", label: "30 h" },
  ];

  return (
    <>
      <div className="flex justify-between items-center gap-x-4">
        <CustomField
          name="plan"
          label="Plan"
          placeholder="Select a plan"
          className="w-2/3"
          type={FiledType.SELECT}
          options={planData}
          isLoading={isLoading}
        />
        <CustomField
          name="amount"
          label="Amount"
          placeholder="Amount"
          className="w-1/3"
          type={FiledType.SELECT}
          options={amountData}
          isLoading={isLoading}
        />
      </div>
      <CustomField
        name="provider"
        label="Provider & Location"
        placeholder="Provider & Location"
        type={FiledType.TEXT}
        href="/dashboard/my-proxies"
        isLoading={true}
      />
      <CustomField
        name="ipRotation"
        label="Minimum time between IP rotation"
        placeholder="IP rotation"
        type={FiledType.TEXT}
        isLoading={isLoading}
      />
    </>
  );
};
