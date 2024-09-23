"use client";

import * as React from "react";

import { BeatLoader } from "react-spinners";
import { Key, User, Zap } from "lucide-react";
import { toast } from "sonner";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Modal } from "@dashboard/_components/ui/modal";
import { CustomField, FiledType } from "@dashboard/_components/ui/custom-field";

const activateNewProxySchema = z.object({
  package: z.string().min(2),
  plan: z.string().min(2, { message: "Plan is required" }),
  amount: z.string().min(2, { message: "Amount is required" }),
  provider: z.string().min(2),
  ipRotation: z.string().min(2),
  proxyType: z.string().min(2),
  autoRenew: z.boolean().default(false),
  username: z.string().min(2),
  password: z.string().min(2),
});

interface RenewExpiredProxiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RenewExpiredProxiesModal = ({
  isOpen,
  onClose,
}: RenewExpiredProxiesModalProps) => {
  const [step, setStep] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof activateNewProxySchema>>({
    resolver: zodResolver(activateNewProxySchema),
    defaultValues: {
      package: "",
      plan: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      proxyType: "",
      autoRenew: false,
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof activateNewProxySchema>) => {
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne isLoading={isLoading} />;
      case 2:
        return <StepTwo isLoading={isLoading} />;
      default:
        return null;
    }
  };

  const handleMove = (direction: "next" | "prev") => {
    if (direction === "next" && step < 2) {
      setStep(step + 1);
    } else if (direction === "prev" && step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Modal
      title="Renew Expired Proxy (id:19)"
      description="New order - Renew - 5G mobile proxy"
      isOpen={isOpen}
      onClose={onClose}
      progress={step * 35}
      icon={Zap}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">{renderStep()}</div>
          <div className="flex flex-col items-center gap-4">
            {step == 2 && (
              <Button
                type="submit"
                variant="default"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <BeatLoader color="#fff" /> : "Renew Proxy"}
              </Button>
            )}
            {step !== 2 && (
              <Button
                type="button"
                variant="default"
                className="w-full"
                onClick={() => handleMove("next")}
                disabled={step === 2}
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

interface StepTwoProps {
  isLoading?: boolean;
}

export const StepTwo = ({ isLoading }: StepTwoProps) => {
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
    </>
  );
};
