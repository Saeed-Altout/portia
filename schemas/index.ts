import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  isRememberMe: z.boolean().optional(),
});
export type LoginFormValues = z.infer<typeof loginSchema>;
export const initialLoginFormValues = {
  email: "",
  password: "",
  isRememberMe: false,
};

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export type RegisterFormValues = z.infer<typeof registerSchema>;
export const initialRegisterFormValues = {
  username: "",
  email: "",
  password: "",
};

export const newPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const codeVerificationSchema = z.object({
  code: z.string().min(6, "Code is required!"),
});
