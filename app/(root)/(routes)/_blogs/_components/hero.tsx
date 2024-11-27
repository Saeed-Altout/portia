"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Section } from "@/components/root/ui/section";
import { Container } from "@/components/root/ui/container";
import { HeadingPage } from "@/components/root/ui/heading-page";

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { initialSearchByEmailValues, searchByEmailSchema, SearchByEmailSchema } from "@/app/(root)/schema";

export const Hero = () => {
  const form = useForm<SearchByEmailSchema>({
    resolver: zodResolver(searchByEmailSchema),
    defaultValues: initialSearchByEmailValues,
  });

  const onSubmit = (values: SearchByEmailSchema) => {
    console.log(values);
  };

  return (
    <Section>
      <Container className="gap-y-8 lg:gap-y-10">
        <HeadingPage
          label="Our blog"
          title="Portia.io blog"
          description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col sm:flex-row items-start justify-start gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full sm:w-fit">
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription>
                    We care about your data in our{" "}
                    <Link href="/privacy-policy" className="underline">
                      privacy policy
                    </Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full sm:w-fit">
              Subscribe
            </Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
};
