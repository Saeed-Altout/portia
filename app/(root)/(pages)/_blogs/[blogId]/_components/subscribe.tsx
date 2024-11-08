"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Container } from "@/app/(root)/_components/ui/container";
import { Section } from "@/app/(root)/_components/ui/section";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
});

export const Subscribe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Section>
      <Container className="md:flex-row items-center justify-between bg-[#F5F5FA] p-16 rounded-[16px] ">
        <div className="space-y-4 md:space-y-5">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Join 2,000+ subscribers
          </h1>
          <p className="text">
            Stay in the loop with everything you need to know.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-start justify-center gap-x-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription>
                    We care about your data in our{" "}
                    <Link className="underline" href="/privacy-policy">
                      privacy policy
                    </Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
};
