import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";
import { userControllers } from "./user.controller";

const route = express.Router();

route.post(
  "/",
  validateRequest(userValidationSchema),
  userControllers.createUser,
);

export const userRoutes = route;
