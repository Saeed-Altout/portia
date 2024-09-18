import * as React from "react";

import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

interface StepTwoProps {
  isLoading?: boolean;
}

export const StepTwo = ({ isLoading }: StepTwoProps) => {
  return (
    <>
      <CustomField
        name="provider"
        label="Minimum time between IP rotation"
        placeholder="Provider & Location"
        type={FiledType.TEXT}
        href="/dashboard/my-proxies"
        isLoading={true}
      />
      <CustomField
        name="ipRotation"
        label="Provider & Location"
        placeholder="IP rotation"
        type={FiledType.TEXT}
        isLoading={isLoading}
      />
    </>
  );
};
