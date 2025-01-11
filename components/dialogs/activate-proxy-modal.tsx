"use client";

import * as z from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/modal";
import { Loader } from "@/components/ui/loader";

import { StepOne } from "./activate/step-one";
import { StepTwo } from "./activate/step-two";
import { StepThree } from "./activate/step-three";

import { ModalType } from "@/config/constants";

import { useModalStore } from "@/stores/use-modal-store";
import { activateNewProxySchema } from "@/schemas";
import { useProxyStore } from "@/stores/use-proxy-store";
import {
  useAddProxyMutation,
  useGetProxyByIdQuery,
} from "@/services/proxies/hooks";

export const ActivateProxyModal = () => {
  const { proxy, price, offer, setOffer } = useProxyStore();

  const { step, isOpen, type, setStep, moveNextStep, movePrevStep, onClose } =
    useModalStore();
  const isOpenModal = isOpen && type === ModalType.ACTIVE_PROXY;

  const { data: currentProxy, isSuccess: currentProxyIsSuccess } =
    useGetProxyByIdQuery(proxy.id.toString());
  const { mutateAsync, isPending } = useAddProxyMutation();

  const form = useForm<z.infer<typeof activateNewProxySchema>>({
    resolver: zodResolver(activateNewProxySchema),
    defaultValues: {
      pkg_id: "",
      plan_id: "",
      amount: "",
      provider: "",
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
        parent_proxy_id: offer.parent_proxy_id,
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
    onClose();
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
    if (proxy.id && currentProxy && currentProxyIsSuccess) {
      setOffer(currentProxy.data);
    }
  }, [currentProxy, proxy, setOffer, currentProxyIsSuccess]);

  return (
    <Modal
      title={currentProxyIsSuccess ? "Activate Proxy" : "Loading..."}
      description={
        currentProxyIsSuccess
          ? `New order - ${offer.parent_proxy_id ?? ""} proxy`
          : "Please wait to fetch data..."
      }
      isOpen={isOpenModal}
      onClose={onCancel}
      progress={step * 35}
    >
      {currentProxyIsSuccess ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              {renderStep(form)}
              <p className="text-lg font-semibold">Cost: {price ?? 0}$</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              {step == 3 && (
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <Loader className="ml-2" /> : "Activate Proxy"}
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
      ) : (
        <div className="h-fit">
          <div className="flex justify-center items-center py-10">
            <div className="z-50 w-full h-full flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm flex-col gap-7">
              <div className="w-14 h-14 border-[6px] border-[#D4D4FF] border-l-[#111280] rounded-full animate-spin"></div>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      )}
    </Modal>
  );
};
