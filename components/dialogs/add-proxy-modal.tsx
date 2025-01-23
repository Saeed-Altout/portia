"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/modal";

import { StepOne } from "./add/step-one";
import { StepTwo } from "./add/step-two";
import { StepThree } from "./add/step-three";

import { ModalType } from "@/config/constants";
import { useAddProxyMutation } from "@/services/proxies/hooks";
import { useModalStore, useProxyStore } from "@/stores";
import { REGEX_PASSWORD_PROXY } from "@/hooks/use-password-control";
export const formSchema = z.object({
  pkgName: z.string().min(1),
  planName: z.string().min(1),
  amount: z.string().min(1),
  provider: z.string().min(1),
  ipRotation: z.string().min(1),
  protocol: z.string().min(1),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .regex(REGEX_PASSWORD_PROXY, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    }),
});

export const AddProxyModal = () => {
  const { proxy, price, reset } = useProxyStore();

  const { step, isOpen, type, setStep, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.ADD_PROXY;

  const { mutateAsync, isPending } = useAddProxyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pkgName: "",
      planName: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      protocol: "",
      username: "",
      password: "",
    },
  });

  const handleClose = () => {
    setStep(1);
    form.reset();
    reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        parent_proxy_id: proxy.parent_proxy_id,
        pkg_id: proxy.package_id,
        duration: proxy.duration,
        protocol: values.protocol,
        username: values.username,
        password: values.password,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const moveNextStep = () => {
    const values = form.getValues();

    if (step === 1) {
      if (!values.pkgName || !values.planName || !values.amount) {
        form.setError("pkgName", {
          type: "required",
          message: "Package is required.",
        });
        form.setError("planName", {
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

  const renderStep = (form: any) => {
    switch (step) {
      case 1:
        return <StepOne form={form} />;
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
      description={`New order - ${proxy.parent_proxy_id ?? ""} proxy`}
      isOpen={isOpenModal}
      onClose={handleClose}
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
                onClick={handleClose}
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
