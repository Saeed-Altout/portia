"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  ArrowUpRight,
  Eye,
  EyeOff,
  Key,
  Loader2,
  User,
  Zap,
} from "lucide-react";

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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleIcon } from "@/components/circle-icon";

import { useProxyStore, useModalStore } from "@/stores";

import { ModalType, ROUTES } from "@/config/constants";
import { useGetPortsQuery } from "@/services/settings/hooks";
import { useManageProxyMutation } from "@/services/proxies/hooks";
import { usePasswordControl } from "@/hooks/use-password-control";
import { Loader } from "@/components/ui/loader";

export const formSchema = z.object({
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
    .regex(/^(?!.*[\u0600-\u06FF])/, {
      message: "Password must not contain Arabic letters.",
    }),
});

export const ManageSheet = () => {
  const pathname = usePathname();
  const { passwordType, togglePasswordVisibility, handleSubjectPassword } =
    usePasswordControl({
      onPasswordGenerated: (password) => {
        form.setValue("password", password);
      },
    });

  const { isOpen, type, onClose } = useModalStore();
  const isOpenModal = isOpen && type === ModalType.MANAGE_PROXY;

  const { proxy, reset, setProxy } = useProxyStore();

  const ports = useGetPortsQuery({ id: proxy.package_id });
  const { mutateAsync, isPending } = useManageProxyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "",
      protocol: "",
      username: "",
      password: "",
      ipRotation: "",
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
        parent_proxy_id: proxy.parent_proxy_id,
        protocol: values.protocol,
        password: values.password,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (proxy.service_provider && proxy.country_name && proxy.rotation_time) {
      form.setValue("ipRotation", `${proxy.rotation_time ?? ""}`);
      form.setValue(
        "provider",
        `${proxy.service_provider} / ${proxy.country_name}`
      );
    }
    if (proxy.username) form.setValue("username", proxy.username);
    if (proxy.password) form.setValue("password", proxy.password);
    if (proxy.protocol) form.setValue("protocol", proxy.protocol);
  }, [form, proxy]);

  return (
    <Sheet open={isOpenModal} onOpenChange={handleClose}>
      <SheetContent className="flex flex-col h-screen px-0 w-full sm:w-3/4">
        <SheetHeader className="px-4">
          <CircleIcon icon={Zap} theme="primary" />
          <div>
            <SheetTitle>Manage Proxy</SheetTitle>
            <SheetDescription>You can manage your proxy here.</SheetDescription>
          </div>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
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
                        className="flex-1 rounded-r-none"
                        disabled={true}
                        readOnly
                        {...field}
                      />
                      <Button
                        size="icon"
                        className="rounded-l-none"
                        type="button"
                        onClick={() => onClose()}
                        asChild
                      >
                        <Link
                          href={`${ROUTES.DASHBOARD_LOCATIONS}?redirect=${pathname}`}
                        >
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
              control={form.control}
              name="ipRotation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum time between IP rotation</FormLabel>
                  <FormControl>
                    <Input
                      disabled={true}
                      readOnly
                      placeholder="IP rotation"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="protocol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Protocol type</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setProxy({ ...proxy, protocol: value });
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        {ports.isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <SelectValue placeholder="select a proxy type" />
                        )}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ports.data?.data.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      placeholder="username"
                      disabled
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
                        type={passwordType}
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
            <div className="flex items-center gap-4">
              <Button
                disabled={isPending}
                type="submit"
                className="w-full md:w-auto"
              >
                {isPending ? <Loader /> : "Update"}
              </Button>
              <Button
                disabled={isPending}
                type="button"
                variant="outline"
                className="w-full md:w-auto"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
