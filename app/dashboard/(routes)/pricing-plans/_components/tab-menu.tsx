export const TabMenu = ({
  items,
  selected,
  onChange,
}: {
  items: any[];
  selected: string;
  onChange: (value: any) => void;
}) => {
  return (
    <div className="mb-6 flex space-x-4 bg-muted w-fit p-1 rounded-md">
      {items.map((item) => (
        <div
          role="button"
          key={item.id}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selected === item.name ? "bg-white text-black-default" : "bg-transparent text-muted-foreground"
          }`}
          onClick={() => onChange(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
