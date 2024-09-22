import * as React from "react";

import { Key, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

interface StepThreeProps {
  isLoading?: boolean;
}

export const StepThree = ({ isLoading }: StepThreeProps) => {
  const { control } = useFormContext();

  const proxyTypeData = [
    { value: "http-proxy", label: "Http proxy" },
    { value: "https-proxy", label: "Https proxy" },
  ];

  return (
    <>
      <CustomField
        name="proxyType"
        label="Proxy Type"
        placeholder="Proxy type"
        type={FiledType.SELECT}
        options={proxyTypeData}
        isLoading={isLoading}
      />
      <CustomField
        name="autoRenew"
        labelCheckbox="Auto Renew"
        type={FiledType.CHECKBOX}
        isLoading={isLoading}
      />
      <CustomField
        name="username"
        label="Proxy Authentications"
        placeholder="Username"
        icon={User}
        type={FiledType.TEXT}
        isLoading={isLoading}
      />
      <CustomField
        name="password"
        placeholder="Password"
        icon={Key}
        type={FiledType.TEXT}
        isLoading={isLoading}
      />
      <p className="text-lg font-semibold">Cost: 0,000$</p>
    </>
  );
};
