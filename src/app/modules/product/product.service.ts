import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

export const productServices = {
  getAllProductFromDB,
  createProductIntoDB,
};
