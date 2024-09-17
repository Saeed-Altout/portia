"use client";

import * as React from "react";
import { Key, User } from "lucide-react";

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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Modal } from "@dashboard/_components/ui/modal";
import { useChangeProxyAuthenticationsModal } from "@dashboard/hooks/use-change-proxy-authentications-modal";

const changeProxyAuthenticationsSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(2),
});

export const ChangeProxyAuthenticationsModal = () => {
  const changeProxyAuthenticationsModal = useChangeProxyAuthenticationsModal();

  const form = useForm<z.infer<typeof changeProxyAuthenticationsSchema>>({
    resolver: zodResolver(changeProxyAuthenticationsSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (
    values: z.infer<typeof changeProxyAuthenticationsSchema>
  ) => {
    console.log(values);
  };

  return (
    <Modal
      title="Change my proxy (id:24) Authentications"
      isOpen={changeProxyAuthenticationsModal.isOpen}
      onClose={changeProxyAuthenticationsModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proxy Authentications</FormLabel>
                  <FormControl>
                    <Input icon={User} placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input icon={Key} placeholder="Password" {...field} />
                  </FormControl>
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
              onClick={() => changeProxyAuthenticationsModal.onClose()}
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" className="basis-1/2">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
