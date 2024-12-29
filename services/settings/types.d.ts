declare type RootResponse<T> = {
  status: boolean;
  data: T;
  message: string | string[] | null;
};

declare type IPort = string;
declare type IPorts = IPort[];
