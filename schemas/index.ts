import * as z from "zod";

export const userProfileSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  current_password: z.string(),
  new_password: z.string(),
  new_password_confirmation: z.string(),
});

export const renewProxySchema = z.object({
  pkg_id: z.string().min(1),
  plan_id: z.string().min(1),
  amount: z.string().min(1),
  provider: z.string().min(1),
  ipRotation: z.string().min(1),
  protocol: z.string().min(1),
  re_new: z.boolean().default(false),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z.string().min(6),
});

export const initialFormContactValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: { country: "", number: "" },
  agreeToPrivacyPolicy: false,
};

export const searchByEmailSchema = z.object({
  email: z.string().email(),
});

export type SearchByEmailSchema = z.infer<typeof searchByEmailSchema>;
export const initialSearchByEmailValues = { email: "" };
