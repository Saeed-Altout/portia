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

import { useChangeProxyTypeModal } from "@/app/dashboard/hooks/modals/use-change-proxy-type-modal";

const changeProxyTypeSchema = z.object({
  proxyType: z.string().min(2),
});

export const ChangeProxyTypeModal = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const changeProxyTypeModal = useChangeProxyTypeModal();

  const form = useForm<z.infer<typeof changeProxyTypeSchema>>({
    resolver: zodResolver(changeProxyTypeSchema),
    defaultValues: {
      proxyType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof changeProxyTypeSchema>) => {
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
    changeProxyTypeModal.onClose();
  };

  const proxyTypeData = [
    { value: "http-proxy", label: "Http proxy" },
    { value: "https-proxy", label: "Https proxy" },
  ];

  return (
    <Modal
      title="Change my proxy (id:24) Type"
      isOpen={changeProxyTypeModal.isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomField
            name="proxyType"
            label="Proxy Type"
            placeholder="Proxy type"
            type={FiledType.SELECT}
            options={proxyTypeData}
            isLoading={isLoading}
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
