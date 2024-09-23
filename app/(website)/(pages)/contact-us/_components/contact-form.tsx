"use client";

import * as React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { formContactSchema } from "@/app/(website)/schema";

import { Section } from "@/app/(website)/_components/ui/section";
import { Container } from "@/app/(website)/_components/ui/container";
import { HeadingPage } from "@/app/(website)/_components/ui/heading-page";

import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";

export type FormContactValues = z.infer<typeof formContactSchema>;

export const ContactForm = () => {
  const form = useForm<FormContactValues>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: { country: "", number: "" },
      agreeToPrivacyPolicy: false,
    },
  });

  const onSubmit = (values: FormContactValues) => {
    console.log(values);
  };

  return (
    <Section className="pt-16 pb-24">
      <Container className="gap-y-6">
        <HeadingPage
          title="Get in touch"
          description="Our friendly team would love to hear from you."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              <FormField
                control={form.control}
                name="phoneNumber.country"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="US" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["US", "SY", "DE"].map((country, index) => (
                          <SelectItem value={country} key={index}>
                            {country}
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
                name="phoneNumber.number"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full col-span-3 md:col-span-7">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agreeToPrivacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 border-none outline-none shadow-none">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      You agree to our friendly{" "}
                      <Link href="/privacy-policy" className="underline">
                        privacy policy.
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Send message</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
};
