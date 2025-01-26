import express from "express";
import { productControllers } from "./product.controller";

const route = express.Router();

route.get("/", productControllers.getAllProduct);
route.post("/create", productControllers.createProduct);

export const productRoutes = route;
