"use client";

import { useEffect } from "react";
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
import { Loader } from "@/components/ui/loader";
import { Modal } from "@/components/modal";

import { useModalStore, useProxyStore } from "@/stores";
import { ModalType } from "@/config/constants";
import { useEditAuthProxyMutation } from "@/services/proxies/hooks";
import {
  usePasswordControl,
  REGEX_PASSWORD_PROXY,
} from "@/hooks/use-password-control";
export const formSchema = z.object({
  username: z.string().min(2),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .regex(REGEX_PASSWORD_PROXY, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    }),
});
export const EditAuthProxyModal = () => {
  const {
    passwordVisibility,
    togglePasswordVisibility,
    handleSubjectPassword,
  } = usePasswordControl({
    passwordType: "proxy",
    onPasswordGenerated: (password) => {
      form.setValue("password", password);
    },
  });

  const { proxy, reset } = useProxyStore();
  const { mutateAsync, isPending } = useEditAuthProxyMutation();

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.EDIT_AUTH_PROXY;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleClose = () => {
    form.reset();
    reset();
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({
        proxy_id: proxy.proxy_id,
        password: values.password,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (proxy?.username) {
      form.setValue("username", proxy.username);
    }
  }, [form, proxy]);

  return (
    <Modal
      title={`Change my proxy (id:${proxy.proxy_id}) Authentications`}
      isOpen={isOpenModal}
      onClose={handleClose}
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
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-sm font-medium">
                      Password
                    </FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        const password = await handleSubjectPassword();
                        if (password) {
                          field.onChange(password);
                        }
                      }}
                      disabled={isPending}
                      className="h-7 text-xs"
                    >
                      Generate Password
                    </Button>
                  </div>
                  <FormControl>
                    <div className="flex items-center relative">
                      <Input
                        {...field}
                        icon={Key}
                        type={passwordVisibility}
                        disabled={isPending}
                        placeholder="new password"
                      />
                      <div
                        role="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-1 h-[80%] w-[40px] flex justify-center items-center"
                        aria-label="Toggle password visibility"
                        title="Toggle password visibility"
                      >
                        {passwordVisibility === "password" ? (
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
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
