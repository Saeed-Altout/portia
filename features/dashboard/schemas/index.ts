import * as z from "zod";

export const userProfileSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  current_password: z.string(),
  new_password: z.string(),
  new_password_confirmation: z.string(),
});

export const activateNewProxySchema = z.object({
  pkg_id: z.string().min(1),
  plan_id: z.string().min(1),
  amount: z.string().min(1),
  provider: z.string().min(1),
  ipRotation: z.string().min(1),
  protocol: z.string().min(1),
  re_new: z.boolean().default(false),
  username: z.string().min(1),
  password: z.string().min(1),
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
