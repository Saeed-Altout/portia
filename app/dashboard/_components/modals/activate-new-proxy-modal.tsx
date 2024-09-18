"use client";

import * as React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { StepOne } from "../steps/stepOne";
import { StepTwo } from "../steps/stepTwo";
import { StepThree } from "../steps/stepThree";

import { Modal } from "@dashboard/_components/ui/modal";
import { useActivateNewProxyModal } from "@dashboard/hooks/use-activate-new-proxy-modal";

const activateNewProxySchema = z.object({
  package: z.string().min(2),
  plan: z.string().min(2),
  amount: z.string().min(2),
  provider: z.string().min(2),
  ipRotation: z.string().min(2),
  proxyType: z.string().min(2),
  autoRenew: z.boolean().default(false),
  username: z.string().min(2),
  password: z.string().min(2),
});

export const ActivateNewProxyModal = () => {
  const [step, setStep] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const activateNewProxyModal = useActivateNewProxyModal();

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

  const onClose = () => {
    form.reset();
    setIsLoading(false);
    activateNewProxyModal.onClose();
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
      isOpen={activateNewProxyModal.isOpen}
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
