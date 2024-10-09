import * as React from "react";

import Link from "next/link";

import { useFormContext } from "react-hook-form";
import { ArrowUpRight, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStoreModal } from "@/hooks/use-store-modal";

interface CustomFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  icon?: LucideIcon;
  type?: FiledType;
  options?: { value: string; label: string }[];
  href?: string;
  prefix?: string;
  description?: string;
  hrefBackButton?: string;
  labelBackButton?: string;
  labelCheckbox?: string;
}

export enum FiledType {
  TEXT = "text",
  SELECT = "select",
  CHECKBOX = "checkbox",
  EMAIL = "email",
  PASSWORD = "password",
  TEXTAREA = "textarea",
}

export const CustomField = ({
  name,
  label,
  placeholder,
  icon,
  isLoading = false,
  type = FiledType.TEXT,
  options = [],
  href,
  description,
  labelCheckbox,
  className,
  prefix,
  hrefBackButton,
  labelBackButton,
}: CustomFieldProps & React.HtmlHTMLAttributes<HTMLElement>) => {
  const { control } = useFormContext();
  const storeModal = useStoreModal();

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn(className)}>
            {label && <FormLabel>{label}</FormLabel>}
            {type === FiledType.TEXTAREA && (
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  disabled={isLoading}
                  rows={6}
                  {...field}
                />
              </FormControl>
            )}
            {type === FiledType.TEXT && !href && (
              <FormControl>
                <Input
                  placeholder={placeholder}
                  disabled={isLoading}
                  icon={icon}
                  prefix={prefix}
                  {...field}
                />
              </FormControl>
            )}
            {type === FiledType.TEXT && href && (
              <FormControl>
                <div className="flex justify-between items-center">
                  <Input
                    placeholder={placeholder}
                    disabled={isLoading}
                    icon={icon}
                    className="flex-1 rounded-r-none"
                    {...field}
                  />
                  <Button
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => storeModal.onCloseActivateNewProxy()}
                    asChild
                  >
                    <Link href={href}>
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">ArrowUpRight Icon</span>
                    </Link>
                  </Button>
                </div>
              </FormControl>
            )}
            {type === FiledType.SELECT && (
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger disabled={isLoading}>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            )}
            {type === FiledType.CHECKBOX && (
              <div className="flex justify-start items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormLabel className="mt-1 text">
                  {labelCheckbox}{" "}
                  {hrefBackButton && (
                    <Link href={hrefBackButton} className="underline">
                      {labelBackButton}
                    </Link>
                  )}
                </FormLabel>
              </div>
            )}

            {type === FiledType.PASSWORD && (
              <FormControl>
                <Input
                  type="password"
                  placeholder={placeholder}
                  disabled={isLoading}
                  icon={icon}
                  {...field}
                />
              </FormControl>
            )}
            {type === FiledType.EMAIL && (
              <FormControl>
                <Input
                  type="email"
                  placeholder={placeholder}
                  disabled={isLoading}
                  icon={icon}
                  {...field}
                />
              </FormControl>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
