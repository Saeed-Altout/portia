"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Section } from "@website/_components/ui/section";
import { Container } from "@website/_components/ui/container";
import { HeadingPage } from "@website/_components/ui/heading-page";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CustomField, FiledType } from "@/components/ui/custom-field";

import {
  formContactSchema,
  FormContactValues,
  initialValues,
} from "@website/schema";
import { countriesName } from "@website/constants";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<FormContactValues>({
    resolver: zodResolver(formContactSchema),
    defaultValues: initialValues,
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
              <CustomField
                name="firstName"
                label="First Name"
                placeholder="first name"
                type={FiledType.TEXT}
                isLoading={isLoading}
              />
              <CustomField
                name="lastName"
                label="Last Name"
                placeholder="last name"
                type={FiledType.TEXT}
                isLoading={isLoading}
              />
            </div>
            <CustomField
              name="email"
              label="Email"
              placeholder="you@company.com"
              type={FiledType.EMAIL}
              isLoading={isLoading}
            />
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <div className="flex flex-row items-center justify-start gap-2">
                <CustomField
                  name="phoneNumber.country"
                  placeholder="US"
                  type={FiledType.SELECT}
                  options={countriesName}
                  isLoading={isLoading}
                  className="w-[80px]"
                />

                <CustomField
                  name="phoneNumber.number"
                  placeholder="+1 (555) 000-0000"
                  type={FiledType.TEXT}
                  isLoading={isLoading}
                  className="flex-1"
                />
              </div>
            </div>
            <CustomField
              name="message"
              label="Message"
              placeholder="write here your message"
              type={FiledType.TEXTAREA}
              isLoading={isLoading}
            />
            <CustomField
              name="agreeToPrivacyPolicy"
              labelCheckbox="You agree to our friendly"
              labelBackButton="privacy policy."
              hrefBackButton="/privacy-policy"
              type={FiledType.CHECKBOX}
              isLoading={isLoading}
            />
            <Button type="submit">Send message</Button>
          </form>
        </Form>
      </Container>
    </Section>
  );
};
