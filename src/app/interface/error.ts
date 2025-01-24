export type TErrorDetails = {
  path: string | number;
  message: string;
}[];

export type TErrorResponse = {
  statusCode: number;
  message: string;
  errorDetails: TErrorDetails;
};
