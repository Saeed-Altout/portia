"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Key, User } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";

import { Modal } from "@dashboard/_components/ui/modal";
import { useActivateNewProxyModal } from "@dashboard/hooks/use-modal";

const activateNewProxySchema = z.object({
  package: z.string().min(2),
  plan: z.string().min(2),
  amount: z.string().min(2),
  provider: z.string().min(2),
  ipRotation: z.string().min(2),
  proxyType: z.string().min(2),
  autoRenew: z.boolean().default(false),
  proxyAuthentication: z.string().min(2),
  username: z.string().min(2),
  password: z.string().min(2),
});

export const ActivateNewProxyModal = () => {
  const activateNewProxyModal = useActivateNewProxyModal();

  const form = useForm<z.infer<typeof activateNewProxySchema>>({
    resolver: zodResolver(activateNewProxySchema),
    defaultValues: {
      package: "",
      plan: "",
      amount: "",
      provider: "First available uk network & location",
      ipRotation: "",
      proxyType: "",
      autoRenew: false,
      proxyAuthentication: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof activateNewProxySchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Activate a new proxy"
      description="New order - 5G mobile proxy"
      isOpen={activateNewProxyModal.isOpen}
      onClose={activateNewProxyModal.onClose}
      isLoading
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Package</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex justify-between items-center gap-x-5">
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="basis-2/3">
                  <FormLabel>Plan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="basis-1/3">
                  <FormLabel>Amount</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Amount" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="10h">10 h</SelectItem>
                      <SelectItem value="20g">20 h</SelectItem>
                      <SelectItem value="30">30 h</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provider & Location</FormLabel>
                  <FormControl>
                    <div className="flex justify-between items-center">
                      <Input
                        placeholder="Provider & Location"
                        {...field}
                        className="flex-1 rounded-r-none"
                      />
                      <Button size="icon" className="rounded-l-none" asChild>
                        <Link href="/">
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="ipRotation"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Minimum time between IP rotation</FormLabel>
                <FormControl>
                  <Input placeholder="IP rotation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proxyType"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Proxy Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Proxy type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="http-proxy">Http proxy</SelectItem>
                    <SelectItem value="https-proxy">Https proxy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="autoRenew"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Auto Renew</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <div className="flex justify-between items-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-r-none"
                    >
                      <User className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Username"
                      className="rounded-l-none flex-1"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex justify-between items-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-r-none"
                    >
                      <Key className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Password"
                      className="rounded-l-none flex-1"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <p className="text-lg font-semibold">Cost: 0,000$</p>
          </div>
          <div className="col-span-2 flex justify-between items-center gap-5">
            <Button type="button" variant="outline" className="basis-1/2">
              Cancel
            </Button>
            <Button type="submit" variant="default" className="basis-1/2">
              Activate Proxy
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
