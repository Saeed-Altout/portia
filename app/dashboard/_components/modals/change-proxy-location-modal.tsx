"use client";

import * as React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Modal } from "@/app/dashboard/_components/modal";
import { CustomField, FiledType } from "@/components/ui/custom-field";

import { useChangeProxyLocationModal } from "@/app/dashboard/hooks/modals/use-change-proxy-location-modal";

const changeProxyLocationSchema = z.object({
  provider: z.string().min(2),
});

export const ChangeProxyLocationModal = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const changeProxyLocationModal = useChangeProxyLocationModal();

  const form = useForm<z.infer<typeof changeProxyLocationSchema>>({
    resolver: zodResolver(changeProxyLocationSchema),
    defaultValues: {
      provider: "First available uk network & location",
    },
  });

  const onSubmit = (values: z.infer<typeof changeProxyLocationSchema>) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        onClose();
        console.log(values);
        toast.success("Change my proxy location successfully");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onClose = () => {
    form.reset();
    setIsLoading(false);
    changeProxyLocationModal.onClose();
  };

  return (
    <Modal
      title="Change my proxy (id:24) location"
      isOpen={changeProxyLocationModal.isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomField
            name="provider"
            label="Provider & Location"
            placeholder="Provider & Location"
            type={FiledType.TEXT}
            href="/dashboard/my-proxies"
            isLoading={true}
          />
          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="basis-1/2"
              disabled={isLoading}
              onClick={() => onClose()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="basis-1/2"
              disabled={isLoading}
            >
              {isLoading ? <BeatLoader color="#fff" /> : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
