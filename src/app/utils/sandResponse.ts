import { Response } from "express";
import { TResponseGeneric } from "../interface/successResponse";

const sandResponse = <T>(res: Response, data: TResponseGeneric<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  });
};

export default sandResponse;
