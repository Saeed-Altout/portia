import * as z from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  password_confirmation: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
});

export const verifyCodeSchema = z.object({
  code: z.string().min(6, "Code is required!"),
});
