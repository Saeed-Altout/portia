import * as z from "zod";

export const settingsSchema = z.object({
  name: z.object({
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
  }),
  email: z.string().email("Invalid email address"),
  password: z.object({
    currentPassword: z
      .string()
      .min(8, "Current password must be at least 8 characters"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmNewPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  }),
  affiliateLink: z.string().url("Invalid URL"),
});
export type SettingsSchema = z.infer<typeof settingsSchema>;
export const initialValues = {
  name: {
    firstName: "",
    lastName: "",
  },
  email: "",
  password: {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  },
  affiliateLink: "",
};
