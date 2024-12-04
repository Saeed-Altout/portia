"use client";

import { BeatLoader } from "react-spinners";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Modal } from "@/components/dashboard/modal";

import { useModalStore } from "@/stores";
import { ModalType } from "@/config/enums";
import { useGetTablesData, useExportData } from "@/hooks";

const exportDataSchema = z.object({
  tables: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export const ExportDataModal = () => {
  const { mutateAsync, isPending } = useExportData();
  const { isOpen, onClose, type } = useModalStore();
  const { data: tables, isSuccess } = useGetTablesData();
  const isOpenModal = isOpen && type === ModalType.EXPORT_DATA && isSuccess;

  const form = useForm<z.infer<typeof exportDataSchema>>({
    resolver: zodResolver(exportDataSchema),
    defaultValues: {
      tables: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof exportDataSchema>) => {
    try {
      await mutateAsync(values);
      onClose(ModalType.EXPORT_DATA);
    } catch (error) {}
  };

  return (
    <Modal
      title="Export Data"
      description="Select what you need to export."
      isOpen={isOpenModal}
      onClose={() => onClose(ModalType.EXPORT_DATA)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="tables"
            render={() => (
              <FormItem className="space-y-4">
                <FormLabel>Tables</FormLabel>
                {tables?.data.map((table) => (
                  <FormField
                    key={table}
                    control={form.control}
                    name="tables"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={table}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(table)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, table])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== table
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{table}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center gap-5">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={isPending}
              onClick={() => onClose(ModalType.EXPORT_DATA)}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <BeatLoader color="#fff" size={12} /> : "Export"}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
