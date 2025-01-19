/* eslint-disable @next/next/no-img-element */
"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PhoneInput } from "react-international-phone";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/ui/heading";
import {
  useSendContactMessageMutation,
  useSupportLinksQuery,
} from "@/services/settings/hooks";
import { Loader } from "@/components/ui/loader";
import Link from "next/link";

export const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

export const ContactForm = () => {
  const { mutate, isPending } = useSendContactMessageMutation();
  const { data: supportLinks, isLoading } = useSupportLinksQuery();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => mutate(values);

  return (
    <section id="contact-form" className="screen pt-16 pb-24 space-y-12">
      <Heading
        title="Get in touch"
        description="Our friendly team would love to hear from you."
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="first name"
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
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="last name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      disabled={isPending}
                      className="react-international-phone-input-container"
                      defaultCountry="sy"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="write here your message"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" disabled={isPending}>
              {isPending ? <Loader /> : "Send message"}
            </Button>
            {!isLoading && (
              <div className="flex items-center gap-3">
                {supportLinks?.data.map((account) => (
                  <Link
                    href={account.url}
                    key={account.name}
                    className="h-10 w-10 overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${account.name} profile`}
                  >
                    <img
                      src={account.icon_url}
                      alt={`image-${account.name}`}
                      className="h-10 w-10 object-cover"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};
