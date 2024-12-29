declare type Root<T> = {
  status: boolean;
  data: T;
};

declare type INotification = {
  id: string;
  title: string;
  message: string;
  type: string;
  data: Date | string;
  read_at: string | null;
};

declare type INotifications = INotification[];
