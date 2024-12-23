"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/dashboard/modal";
import { Loader } from "@/components/ui/loader";

import { ModalType } from "@/config/enums";
import { useModalStore } from "@/stores";

import { paymentMethodSchema } from "@/schemas";
import { useGetWayPayment } from "@/hooks/dashboard/payment/use-get-way";
import { useDeposit } from "@/hooks/dashboard/payment/use-deposit";
import { CreditCard } from "lucide-react";

export const AddFundsModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.ADD_FUNDS;

  const { mutateAsync, isPending } = useDeposit();
  const { data: methods, isSuccess } = useGetWayPayment();

  const form = useForm<z.infer<typeof paymentMethodSchema>>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: {
      payment_method: "",
      amount: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof paymentMethodSchema>) => {
    try {
      await mutateAsync(values);
      onCancel();
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    form.reset();
    onClose(ModalType.ADD_FUNDS);
  };

  return (
    <Modal
      title="Add funds to your account"
      isOpen={isOpenModal}
      onClose={onCancel}
      icon={CreditCard}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="amount"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment_method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment method:</FormLabel>
                  <Select
                    disabled={isPending || !isSuccess}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {methods?.data.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={isPending}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader /> : "Add funds"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
