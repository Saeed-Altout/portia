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

import { useAddProxy } from "@/hooks";
import { activateNewProxySchema } from "@/schemas";
import { useModalStore, useProxyStore } from "@/stores";

export const AddProxyModal = () => {
  const { price, duration, location, protocol, setProxy, setLocation } =
    useProxyStore();

  const { step, activeProxyModalIsOpen, setStep, activeProxyModalOnClose } =
    useModalStore();

  const { mutateAsync, isPending } = useAddProxy();

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
    try {
      await mutateAsync({
        parent_proxy_id: location ? location?.id.toString() : "",
        pkg_id: values.pkg_id,
        re_new: values.re_new,
        protocol: values.protocol,
        protocol_value: protocol,
        duration: duration ? duration.toString() : "",
        username: values.username,
        password: values.password,
      });
      onClose();
      setProxy({} as IProxy);
      setLocation({} as ILocation);
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = () => {
    setStep(1);
    form.reset();
    activeProxyModalOnClose();
  };

  const moveNextStep = () => {
    const values = form.getValues();

    if (step === 1) {
      if (!values.pkg_id || !values.plan_id || !values.amount) {
        form.setError("pkg_id", {
          type: "required",
          message: "Package is required.",
        });
        form.setError("plan_id", {
          type: "required",
          message: "Plan is required.",
        });
        form.setError("amount", {
          type: "required",
          message: "Amount is required.",
        });
        return;
      }
    }

    if (step === 2) {
      if (!values.provider || !values.ipRotation) {
        form.setError("provider", {
          type: "required",
          message: "Provider is required.",
        });
        form.setError("ipRotation", {
          type: "required",
          message: "IP Rotation is required.",
        });

        return;
      }
    }

    if (step === 3) {
      if (!values.username || !values.password || !values.protocol) {
        form.setError("username", {
          type: "required",
          message: "Username is required.",
        });
        form.setError("password", {
          type: "required",
          message: "Password is required.",
        });
        form.setError("protocol", {
          type: "required",
          message: "Protocol is required.",
        });
        return;
      }
    }

    setStep(step + 1);
  };

  const movePrevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 2 && location) {
      form.setValue("ipRotation", `${location.rotation_time ?? ""}`);
      form.setValue("provider", `${location.service_provider_name ?? ""}`);
    }
  }, [form, location, step]);

  const renderStep = (step: any) => {
    switch (step) {
      case 1:
        return <StepOne form={form} isLoading={isPending} />;
      case 2:
        return <StepTwo form={form} />;
      case 3:
        return <StepThree form={form} isLoading={isPending} />;
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
            {renderStep(form)}
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
