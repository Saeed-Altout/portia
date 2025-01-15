"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/modal";

import { StepOne } from "./activate/step-one";
import { StepTwo } from "./activate/step-two";
import { StepThree } from "./activate/step-three";

import { useActivateProxyMutation } from "@/services/proxies/hooks";
import { useModalStore, useProxyStore } from "@/stores";

export const formSchema = z.object({
  pkg_id: z.string(),
  plan_id: z.string(),
  amount: z.string(),
  provider: z.string(),
  ipRotation: z.string(),
  protocol: z.string(),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z.string().min(6),
});

export const ActivateProxyModal = ({
  proxy,
  isOpen,
}: {
  proxy: IActivateProxy;
  isOpen: boolean;
}) => {
  const { proxy: proxyStore, price, reset } = useProxyStore();
  const { step, setStep, onClose } = useModalStore();

  const { mutateAsync, isPending } = useActivateProxyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pkg_id: "",
      plan_id: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      protocol: "",
      username: "",
      password: "",
    },
  });

  const onCancel = () => {
    setStep(1);
    form.reset();
    reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id: proxyStore.parent_proxy_id,
        pkg_id: proxyStore.package_id,
        protocol: proxyStore.protocol,
        duration: proxyStore.duration.toString(),
        username: values.username,
        password: values.password,
      });
      onCancel();
    } catch (error) {}
  };

  const moveNextStep = () => {
    setStep(step + 1);
  };

  const movePrevStep = () => {
    setStep(step - 1);
  };

  const renderStep = (form: any) => {
    switch (step) {
      case 1:
        return <StepOne form={form} />;
      case 2:
        return <StepTwo form={form} />;
      case 3:
        return <StepThree form={form} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title="Activate a new proxy"
      description={`New order - ${proxy.parent_proxy_id ?? ""} proxy`}
      isOpen={isOpen}
      onClose={onCancel}
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
    </Modal>
  );
};
