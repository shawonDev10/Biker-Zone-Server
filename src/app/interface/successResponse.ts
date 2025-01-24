export type TResponseGeneric<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};
