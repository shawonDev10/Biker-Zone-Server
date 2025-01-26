import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";
import sandResponse from "../../utils/sandResponse";

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.getAllProductFromDB();

  sandResponse(res, {
    success: true,
    statusCode: 200,
    message: "All products retrieve successfully",
    data: result,
  });
});

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProductIntoDB(req.body);

  sandResponse(res, {
    success: true,
    statusCode: 200,
    message: "User registered successfully",
    data: result,
  });
});

export const productControllers = {
  getAllProduct,
  createProduct,
};
