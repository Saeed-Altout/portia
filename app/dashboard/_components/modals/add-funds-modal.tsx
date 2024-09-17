"use client";

import * as React from "react";
import { CreditCard } from "lucide-react";

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

import { Modal } from "@dashboard/_components/ui/modal";
import { useAddFundsModal } from "@dashboard/hooks/use-add-funds";

const addFundsSchema = z.object({
  amount: z.string().min(2),
  method: z.string().min(2),
});

export const AddFundsModal = () => {
  const addFunds = useAddFundsModal();

  const form = useForm<z.infer<typeof addFundsSchema>>({
    resolver: zodResolver(addFundsSchema),
    defaultValues: {
      amount: "",
      method: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addFundsSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Add funds to your account"
      isOpen={addFunds.isOpen}
      onClose={addFunds.onClose}
      icon={CreditCard}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bank">Bank</SelectItem>
                      <SelectItem value="standard">Crypto Currency</SelectItem>
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
              className="basis-1/2"
              onClick={() => addFunds.onClose()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" className="basis-1/2">
              Add funds
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
