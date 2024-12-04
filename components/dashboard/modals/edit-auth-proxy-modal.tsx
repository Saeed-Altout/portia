"use client";

import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Eye, EyeOff, Key, User } from "lucide-react";

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
import { Modal } from "@/components/dashboard/modal";

import { useModalStore, useProxyStore } from "@/stores";
import { useEditAuthProxy } from "@/hooks/dashboard/proxy/use-edit-auth-proxy";
import { ModalType } from "@/config/enums";

const editAuthProxySchema = z.object({
  username: z.string().min(2),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const EditAuthProxyModal = () => {
  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.EDIT_AUTH_PROXY;

  const { proxy, setProxy } = useProxyStore();
  const { mutateAsync, isPending } = useEditAuthProxy();

  const form = useForm<z.infer<typeof editAuthProxySchema>>({
    resolver: zodResolver(editAuthProxySchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof editAuthProxySchema>) => {
    try {
      await mutateAsync({
        proxy_id: proxy.proxy_id ? proxy.proxy_id : "",
        password: values.password,
      });

      onCancel();
      setProxy({} as IProxy);
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    form.reset();
    onClose(ModalType.EDIT_AUTH_PROXY);
  };

  useEffect(() => {
    if (proxy && proxy.username) {
      form.setValue("username", proxy.username);
    }
  }, [form, proxy]);

  return (
    <Modal
      title={`Change my proxy (id:${proxy.proxy_id ?? ""}) Authentications`}
      isOpen={isOpenModal}
      onClose={onCancel}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      icon={User}
                      type="text"
                      readOnly
                      placeholder="username"
                      disabled={true}
                      {...field}
                    />
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
                  <FormLabel className="text-sm font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center relative">
                      <Input
                        {...field}
                        icon={Key}
                        type={passwordType}
                        disabled={isPending}
                        placeholder="new password"
                      />
                      <div
                        role="button"
                        onClick={() =>
                          setPasswordType((prev) =>
                            prev === "password" ? "text" : "password"
                          )
                        }
                        className="absolute right-1 h-[80%] w-[40px] flex justify-center items-center"
                        aria-label="Toggle password visibility"
                        title="Toggle password visibility"
                      >
                        {passwordType === "password" ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
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
              className="w-full"
              disabled={isPending}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <BeatLoader color="#fff" size={12} /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
