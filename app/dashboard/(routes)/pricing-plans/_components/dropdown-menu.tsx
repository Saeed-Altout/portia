import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const DropdownMenu = ({
  items,
  selected,
  onChange,
}: {
  items: any[];
  selected: string;
  onChange: (value: any) => void;
}) => (
  <Select defaultValue={selected} onValueChange={(value) => onChange(value)}>
    <SelectTrigger>
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      {items.map((item) => (
        <SelectItem key={item.id} value={item.name}>
          {item.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
