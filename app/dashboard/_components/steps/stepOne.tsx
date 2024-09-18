import * as React from "react";

import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

interface StepOneProps {
  isLoading?: boolean;
}

export const StepOne = ({ isLoading }: StepOneProps) => {
  const packageData = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
  ];

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
      <CustomField
        name="package"
        label="Package"
        placeholder="Select a package"
        type={FiledType.SELECT}
        options={packageData}
        isLoading={isLoading}
      />
      <CustomField
        name="plan"
        label="Plan"
        placeholder="Select a plan"
        type={FiledType.SELECT}
        options={planData}
        isLoading={isLoading}
      />
      <CustomField
        name="amount"
        label="Amount"
        placeholder="Select a amount"
        type={FiledType.SELECT}
        options={amountData}
        isLoading={isLoading}
      />
    </>
  );
};
