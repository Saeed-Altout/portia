"use client";

import * as React from "react";
import { toast } from "sonner";
import { CreditCard } from "lucide-react";
import { BeatLoader } from "react-spinners";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Modal } from "@dashboard/_components/ui/modal";
import { CustomField, FiledType } from "@/components/ui/custom-field";
import { useStoreModal } from "@/app/dashboard/hooks/use-store-modal";

const addFundsSchema = z.object({
  amount: z.string().min(2),
  method: z.string().min(2),
});

export const AddFundsModal = () => {
  const storeModal = useStoreModal();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof addFundsSchema>>({
    resolver: zodResolver(addFundsSchema),
    defaultValues: {
      amount: "",
      method: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addFundsSchema>) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        onClose();
        console.log(values);
        toast.success("Add funds successfully");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onClose = () => {
    form.reset();
    setIsLoading(false);
    storeModal.onCloseAddFunds();
  };

  const methodData = [
    { value: "bank", label: "Bank" },
    { value: "crypto-currency", label: "Crypto Currency" },
  ];

  return (
    <Modal
      title="Add funds to your account"
      isOpen={storeModal.addFunds}
      onClose={onClose}
      icon={CreditCard}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <CustomField
              name="amount"
              label="Amount"
              placeholder="Amount"
              type={FiledType.TEXT}
              isLoading={isLoading}
            />
            <CustomField
              name="method"
              label="Payment Method"
              placeholder="Select a method"
              type={FiledType.SELECT}
              options={methodData}
              isLoading={isLoading}
            />
          </div>

          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="basis-1/2"
              disabled={isLoading}
              onClick={() => onClose()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="basis-1/2"
              disabled={isLoading}
            >
              {isLoading ? <BeatLoader color="#fff" /> : "Add funds"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
