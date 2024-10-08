"use client";

import * as React from "react";
import { BeatLoader } from "react-spinners";
import { Key, User } from "lucide-react";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Modal } from "@dashboard/_components/ui/modal";
import { CustomField, FiledType } from "@/components/ui/custom-field";

import { useStoreModal } from "@/app/dashboard/hooks/modals/use-store-modal";
import {
  ActivateNewProxySchema,
  activateNewProxySchema,
  initialValuesActivateNewProxy,
} from "@dashboard/schemas";

export const ActivateNewProxyModal = () => {
  const storeModal = useStoreModal();

  const [step, setStep] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<ActivateNewProxySchema>({
    resolver: zodResolver(activateNewProxySchema),
    defaultValues: initialValuesActivateNewProxy,
  });

  const onSubmit = async (values: ActivateNewProxySchema) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        onClose();
        setStep(1);
        console.log(values);
        toast.success("Proxy activated successfully");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onClose = () => {
    form.reset();
    setIsLoading(false);
    storeModal.onCloseActivateNewProxy();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne isLoading={isLoading} />;
      case 2:
        return <StepTwo isLoading={isLoading} />;
      case 3:
        return <StepThree isLoading={isLoading} />;
      default:
        return null;
    }
  };

  const handleMove = (direction: "next" | "prev") => {
    if (direction === "next" && step < 3) {
      setStep(step + 1);
    } else if (direction === "prev" && step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Modal
      title="Activate a new proxy"
      description="New order - 5G mobile proxy"
      isOpen={storeModal.activateNewProxy}
      onClose={onClose}
      progress={step * 35}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">{renderStep()}</div>
          <div className="flex flex-col items-center gap-4">
            {step == 3 && (
              <Button
                type="submit"
                variant="default"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <BeatLoader color="#fff" /> : "Activate Proxy"}
              </Button>
            )}
            {step !== 3 && (
              <Button
                type="button"
                variant="default"
                className="w-full"
                onClick={() => handleMove("next")}
                disabled={step === 3}
              >
                Next Step
              </Button>
            )}
            {step !== 1 && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleMove("prev")}
              >
                Pervious
              </Button>
            )}
            {step == 1 && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Modal>
  );
};

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

interface StepTwoProps {
  isLoading?: boolean;
}

export const StepTwo = ({ isLoading }: StepTwoProps) => {
  return (
    <>
      <CustomField
        name="provider"
        label="Provider & Location"
        placeholder="Provider & Location"
        type={FiledType.TEXT}
        href="/dashboard/locations"
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

interface StepThreeProps {
  isLoading?: boolean;
}

export const StepThree = ({ isLoading }: StepThreeProps) => {
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
