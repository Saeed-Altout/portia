import { TabMenu } from "./tab-menu";
import { DropdownMenu } from "./dropdown-menu";

interface Filter {
  pkgName: string;
  planName: string;
}

interface FiltersSectionProps {
  packages: CategoryPackage[];
  plans: CategoryPlan[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const FiltersSection = ({
  packages,
  plans,
  filter,
  setFilter,
}: FiltersSectionProps) => {
  const handleFilterChange = (key: keyof Filter, value: number) => {
    setFilter({ ...filter, [key]: value });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="hidden lg:flex items-start justify-start gap-x-12">
        <TabMenu
          items={packages || []}
          selected={filter.pkgName}
          onChange={(e) => handleFilterChange("pkgName", e)}
        />
        <TabMenu
          items={plans || []}
          selected={filter.planName}
          onChange={(e) => handleFilterChange("planName", e)}
        />
      </div>
      <div className="lg:hidden flex flex-col gap-5">
        <DropdownMenu
          items={packages || []}
          selected={filter.pkgName}
          onChange={(e) => handleFilterChange("pkgName", e)}
        />
        <DropdownMenu
          items={plans || []}
          selected={filter.planName}
          onChange={(e) => handleFilterChange("planName", e)}
        />
      </div>
    </div>
  );
};
