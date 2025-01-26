import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>({
  name: String,
  brand: String,
  model: String,
  price: Number,
  category: String,
  availability: String,
  imageUrl: String,
});

export const ProductModel = model<TProduct>("product", ProductSchema);
