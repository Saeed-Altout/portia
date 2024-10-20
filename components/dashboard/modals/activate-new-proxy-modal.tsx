"use client";

import { useState } from "react";

import { toast } from "sonner";
import { ArrowUpRight, Key, User } from "lucide-react";
import { BeatLoader } from "react-spinners";

import * as z from "zod";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/dashboard/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomField, FiledType } from "@/components/ui/custom-field";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Input } from "@/components/ui/input";
import { Arrow } from "@radix-ui/react-select";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export const activateNewProxySchema = z.object({
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

export type ActivateNewProxySchema = z.infer<typeof activateNewProxySchema>;

export const ActivateNewProxyModal = () => {
  const storeModal = useStoreModal();

  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ActivateNewProxySchema>({
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

  const onSubmit = async (values: ActivateNewProxySchema) => {
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
    storeModal.onCloseActivateNewProxy();
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
      isOpen={storeModal.activateNewProxy}
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

interface StepOneProps {
  isLoading?: boolean;
}

export const StepOne = ({ isLoading }: StepOneProps) => {
  const { control } = useFormContext();

  const packageData = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
  ];

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
      <FormField
        control={control}
        name="package"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Packages</FormLabel>
            <Select
              disabled={isLoading}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {packageData.map(({ value, label }, index) => (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="plan"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plans</FormLabel>
            <Select
              disabled={isLoading}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {planData.map(({ value, label }, index) => (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <Select
              disabled={isLoading}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a amount" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {amountData.map(({ value, label }, index) => (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

interface StepTwoProps {
  isLoading?: boolean;
}

export const StepTwo = ({ isLoading }: StepTwoProps) => {
  const { control } = useFormContext();
  const storeModal = useStoreModal();
  return (
    <>
      <FormField
        control={control}
        name="provider"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Provider & Location</FormLabel>
            <FormControl>
              <div className="flex justify-between items-center">
                <Input
                  placeholder="Provider & Location"
                  className="flex-1 rounded-r-none"
                  disabled={true}
                  readOnly
                  {...field}
                />
                <Button
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => storeModal.onCloseActivateNewProxy()}
                  asChild
                >
                  <Link href="/dashboard/locations">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">ArrowUpRight Icon</span>
                  </Link>
                </Button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="ipRotation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum time between IP rotation</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                placeholder="IP rotation"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

interface StepThreeProps {
  isLoading?: boolean;
}

export const StepThree = ({ isLoading }: StepThreeProps) => {
  const { control } = useFormContext();
  const proxyTypeData = [
    { value: "http-proxy", label: "Http proxy" },
    { value: "https-proxy", label: "Https proxy" },
  ];

  return (
    <>
      <FormField
        control={control}
        name="proxyType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proxy Type</FormLabel>
            <Select
              disabled={isLoading}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a proxy type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {proxyTypeData.map(({ value, label }, index) => (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="autoRenew"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="leading-0">Auto Renew</FormLabel>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                icon={User}
                type="text"
                disabled={isLoading}
                placeholder="username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                icon={Key}
                type="password"
                disabled={isLoading}
                placeholder="username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <p className="text-lg font-semibold">Cost: 0,000$</p>
    </>
  );
};
