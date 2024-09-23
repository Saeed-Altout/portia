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

export const activateNewProxySchema = z.object({
  package: z.string().min(2),
  plan: z.string().min(2),
  amount: z.string().min(2),
  provider: z.string().min(2),
  ipRotation: z.string().min(2),
  proxyType: z.string().min(2),
  autoRenew: z.boolean().default(false),
  username: z.string().min(2),
  password: z.string().min(2),
});
export type ActivateNewProxySchema = z.infer<typeof activateNewProxySchema>;
export const initialValuesActivateNewProxy = {
  package: "",
  plan: "",
  amount: "",
  provider: "First available uk network & location",
  ipRotation: "",
  proxyType: "",
  autoRenew: false,
  username: "",
  password: "",
};
