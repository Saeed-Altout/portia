import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Filter = ({
  disabled,
  placeholder,
  onValueChange,
  options = [],
}: {
  disabled: boolean;
  placeholder: string;
  onValueChange: (value: any) => void;
  options: { value: string; label: string }[];
}) => {
  return (
    <Select
      disabled={disabled}
      defaultValue={placeholder === "Package" ? "1" : ""}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"-1"}>None</SelectItem>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value.toString()}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
