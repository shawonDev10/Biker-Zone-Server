import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authValidationSchema } from "./auth.validation";
import { authControllers } from "./auth.controller";

const route = express.Router();

route.post(
  "/",
  validateRequest(authValidationSchema),
  authControllers.loginUserIntoBikerZone,
);

export const authRoutes = route;
