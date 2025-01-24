import mongoose from "mongoose";
import { TErrorDetails, TErrorResponse } from "../interface/error";

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  const errorDetails: TErrorDetails = Object.values(err.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error !",
    errorDetails,
  };
};

export default handleValidationError;
