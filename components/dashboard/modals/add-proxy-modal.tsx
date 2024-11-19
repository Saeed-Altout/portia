"use client";

import { useEffect, useState } from "react";

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
import { proxyStore } from "@/stores/proxy-store";
import { activateNewProxySchema } from "@/schemas";
import { useAddProxy } from "@/features/dashboard/hooks";
import { useGetPorts } from "@/features/dashboard/hooks/use-get-ports";
import { useGetAllPackages } from "@/features/dashboard/hooks/use-get-all-packages";

export const AddProxyModal = () => {
  const {
    isOpen,
    onClose,
    step,
    setStep,
    moveNextStep,
    movePrevStep,
    proxy,
    pkg_id,
    setPackageId,
    duration,
  } = proxyStore();
  const [protocolOptions, setProtocolOptions] = useState<string[]>([]);

  const { mutate, isPending } = useAddProxy();
  const { data: packages } = useGetAllPackages();
  const { data: portsData, refetch } = useGetPorts({ id: pkg_id });
  const { price } = proxyStore();

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
    const protocolValue = values.protocol.includes("http")
      ? proxy?.http_port
      : proxy?.socks_port;

    mutate({
      parent_proxy_id: proxy?.id.toString(),
      pkg_id: values.pkg_id,
      re_new: values.re_new,
      protocol: values.protocol,
      protocol_value: protocolValue,
      duration: duration.toString(),
      username: values.username,
      password: values.password,
    });
  };

  const onClickClose = () => {
    form.reset();
    setStep(1);
    onClose();
  };

  const handleProtocolSelect = (protocol: string) => {
    form.setValue("protocol", protocol);
  };

  useEffect(() => {
    if (portsData?.data) {
      setProtocolOptions(portsData.data);
    }
  }, [portsData]);

  useEffect(() => {
    if (step === 2 && proxy) {
      form.setValue("ipRotation", `${proxy.rotation_time}`);
      form.setValue("provider", `${proxy.service_provider_name}`);
    }
  }, [form, proxy, step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne isLoading={isPending} packages={packages?.data ?? []} />
        );
      case 2:
        return <StepTwo isLoading={isPending} />;
      case 3:
        return (
          <StepThree
            isLoading={isPending}
            protocolOptions={protocolOptions}
            onProtocolSelect={handleProtocolSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      title="Activate a new proxy"
      description="New order - 5G mobile proxy"
      isOpen={isOpen}
      onClose={onClickClose}
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
              <Button
                type="submit"
                variant="default"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? <BeatLoader color="#fff" /> : "Activate Proxy"}
              </Button>
            )}
            {step !== 3 && (
              <Button
                type="button"
                variant="default"
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
                onClick={onClickClose}
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
