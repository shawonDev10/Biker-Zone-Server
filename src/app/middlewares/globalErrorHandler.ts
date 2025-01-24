/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config";
import { ZodError } from "zod";
import handleValidationError from "../errors/handleValidationError";
import handleZodError from "../errors/handleZodError";
import { TErrorDetails } from "../interface/error";
import appError from "../errors/appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong !";
  let details: TErrorDetails = [
    {
      path: "",
      message: "Something went wrong !",
    },
  ];

  //   Handle error conditionally
  if (err instanceof ZodError) {
    const error = handleZodError(err);
    statusCode = error?.statusCode;
    message = error?.message;
    details = error?.errorDetails;
  } else if (err?.name === "ValidationError") {
    const error = handleValidationError(err);
    statusCode = error?.statusCode;
    message = error?.message;
    details = error?.errorDetails;
  } else if (err instanceof appError) {
    statusCode = err?.statusCode;
    message = err?.message;
    details = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    details = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: details,
    stack: config.node_env === "development" ? err.stack : null,
  });
};

export default globalErrorHandler;
