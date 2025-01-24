import { ZodError, ZodIssue } from "zod";
import { TErrorDetails, TErrorResponse } from "../interface/error";

const handleZodError = (err: ZodError): TErrorResponse => {
  const errorDetails: TErrorDetails = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path?.length - 1],
      message: issue?.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error !",
    errorDetails,
  };
};

export default handleZodError;
