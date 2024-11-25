"use client";

import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/dashboard/modal";

import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";

import { useAddProxy } from "@/hooks/dashboard";
import { activateNewProxySchema } from "@/schemas";
import { useModalStore, useProxyStore } from "@/stores";

export const AddProxyModal = () => {
  const { price, duration, location, protocol } = useProxyStore();
  const {
    step,
    setStep,
    moveNextStep,
    movePrevStep,
    activeProxyModalIsOpen,
    activeProxyModalOnClose,
  } = useModalStore();

  const { mutate, isPending } = useAddProxy();

  const form = useForm<z.infer<typeof activateNewProxySchema>>({
    resolver: zodResolver(activateNewProxySchema),
    defaultValues: {
      pkg_id: "",
      plan_id: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      protocol: "",
      re_new: false,
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof activateNewProxySchema>) => {
    mutate({
      parent_proxy_id: location?.id.toString(),
      pkg_id: values.pkg_id,
      re_new: values.re_new,
      protocol: values.protocol,
      protocol_value: protocol,
      duration: duration.toString(),
      username: values.username,
      password: values.password,
    });
  };

  const onClose = () => {
    form.reset();
    setStep(1);
    activeProxyModalOnClose();
  };

  useEffect(() => {
    if (step === 2 && location) {
      form.setValue("ipRotation", `${location.rotation_time}`);
      form.setValue("provider", `${location.service_provider_name}`);
    }
  }, [form, location, step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne isLoading={isPending} />;
      case 2:
        return <StepTwo isLoading={isPending} />;
      case 3:
        return <StepThree isLoading={isPending} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title="Activate a new proxy"
      description={`New order - ${location.service_provider_name ?? ""} proxy`}
      isOpen={activeProxyModalIsOpen}
      onClose={onClose}
      progress={step * 35}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            {renderStep()}
            <p className="text-lg font-semibold">Cost: {price}$</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            {step == 3 && (
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <BeatLoader color="#fff" size={12} />
                ) : (
                  "Activate Proxy"
                )}
              </Button>
            )}
            {step !== 3 && (
              <Button
                type="button"
                className="w-full"
                onClick={moveNextStep}
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
                onClick={movePrevStep}
              >
                Previous
              </Button>
            )}
            {step == 1 && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onClose}
                disabled={isPending}
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
