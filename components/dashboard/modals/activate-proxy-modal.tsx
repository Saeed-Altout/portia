"use client";

import * as z from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/dashboard/modal";

import { StepOne } from "./activate/step-one";
import { StepTwo } from "./activate/step-two";
import { StepThree } from "./activate/step-three";

import { useAddProxy, useGetProxyById } from "@/hooks";
import { activateNewProxySchema } from "@/schemas";
import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";
import { useStore } from "@/stores/use-store";
import { Loader } from "@/components/ui/loader";

export const ActivateProxyModal = () => {
  const { proxy, offer, setOffer } = useStore();
  const { step, isOpen, type, setStep, moveNextStep, movePrevStep, onClose } =
    useModalStore();
  const isOpenModal = isOpen && type === ModalType.ACTIVE_PROXY;
  const { data: currentProxy } = useGetProxyById({ id: +proxy.id });

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
        ...offer,
        protocol: offer.port,
        pkg_id: offer.package_id.toString(),
        duration: offer.duration.toString(),
        re_new: values.re_new,
        username: values.username,
        password: values.password,
      });
      onCancel();
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    setStep(1);
    form.reset();
    onClose(ModalType.ACTIVE_PROXY);
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

  useEffect(() => {
    if (currentProxy) {
      setOffer(currentProxy.data);
    }
  }, [currentProxy, setOffer]);

  return (
    <Modal
      title="Activate a new proxy"
      description={`New order - ${offer.parent_proxy_id ?? ""} proxy`}
      isOpen={isOpenModal}
      onClose={onCancel}
      progress={step * 35}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            {renderStep(form)}
            <p className="text-lg font-semibold">Cost: {proxy.cost}$</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            {step == 3 && (
              <Button type="submit" className="w-full" disabled={isPending}>
                Activate Proxy {isPending && <Loader className="ml-2" />}
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
