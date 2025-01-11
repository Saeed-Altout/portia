declare type TPlan = {
  id: number;
  name: string;
};

declare type TPackage = {
  package_id: number;
  package_name: string;
  plans: IPlan[];
};

declare type TOffer = {
  id: number;
  cost: string;
  description: string;
  plan_id: number;
  package_id: number;
  title: string;
  is_available: boolean;
  color: string;
};
