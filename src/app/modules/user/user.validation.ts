import { z } from "zod";

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    }),
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be string",
    }),
    role: z.enum(["customer", "admin"]).default("customer").optional(),
  }),
});