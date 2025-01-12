"use client";

import { useEffect } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader, Loader2 } from "@/components/ui/loader";
import { ErrorApi } from "@/components/pages/error-api";
import { Modal } from "@/components/modal";

import { StepOne } from "./add/step-one";
import { StepTwo } from "./add/step-two";
import { StepThree } from "./add/step-three";

import { ModalType } from "@/config/constants";
import {
  useAddProxyMutation,
  useGetProxyByIdQuery,
} from "@/services/proxies/hooks";
import { useModalStore, useProxyStore } from "@/stores";

export const formSchema = z.object({
  pkg_id: z.string().min(1),
  plan_id: z.string().min(1),
  amount: z.string().min(1),
  provider: z.string().min(1),
  ipRotation: z.string().min(1),
  protocol: z.string().min(1),
  re_new: z.boolean().default(false),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z.string().min(6),
});
export const ActivateProxyModal = () => {
  const { offer, location, price, duration } = useProxyStore();

  const { step, isOpen, type, setStep, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.ACTIVE_PROXY;

  const { mutateAsync, isPending } = useAddProxyMutation();
  const currentProxy = useGetProxyByIdQuery(offer.id.toString());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id: location ? location?.id.toString() : "",
        pkg_id: values.pkg_id,
        re_new: values.re_new,
        protocol: values.protocol,
        duration: duration ? duration.toString() : "",
        username: values.username,
        password: values.password,
      });
      onCancel();
    } catch (error) {}
  };

  const onCancel = () => {
    setStep(1);
    form.reset();
    onClose();
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

  const renderStep = (form: any) => {
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
      title={currentProxy.isLoading ? "Loading..." : "Activate a new proxy"}
      description={
        currentProxy.isLoading
          ? "Data is fetching."
          : `New order - ${location.service_provider_name ?? ""} proxy`
      }
      isOpen={isOpenModal}
      onClose={onCancel}
      progress={step * 35}
    >
      {true && (
        <div className="pb-10">
          <Loader2 />
        </div>
      )}
      {currentProxy.isError && !currentProxy.isLoading && <ErrorApi />}
      {currentProxy.isSuccess && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              {renderStep(form)}
              <p className="text-lg font-semibold">Cost: {price}$</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              {step == 3 && (
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <Loader /> : "Activate Proxy"}
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
                  onClick={onCancel}
                  disabled={isPending}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </Form>
      )}
    </Modal>
  );
};
