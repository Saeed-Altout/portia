import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(255, { message: "First name must be less than 255 characters" }),

  last_name: z
    .string()
    .trim()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(255, { message: "Last name must be less than 255 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email address must be less than 255 characters" })
    .transform((email) => email.toLowerCase()),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password must be less than 128 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
});

export const sendResetEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const newPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  password_confirmation: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
});

export const verifyCodeSchema = z.object({
  code: z.string().min(6, "Code is required!"),
});

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

export const activateNewProxySchema = z.object({
  pkg_id: z.string().optional(),
  plan_id: z.string().optional(),
  amount: z.string().optional(),
  provider: z.string().optional(),
  ipRotation: z.string().optional(),
  protocol: z.string().optional(),
  re_new: z.boolean().default(false),
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must only contain letters and digits.",
    }),
  password: z.string().min(6),
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

export const formContactSchema = z.object({
  first_name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

export type FormContactValues = z.infer<typeof formContactSchema>;

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

export const editAuthProxySchema = z.object({
  username: z.string().min(2),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const editProxySchema = z.object({
  provider: z.string().min(2),
  protocol: z.string().min(2),
});
export const paymentMethodSchema = z.object({
  payment_method: z.string().min(2),
  amount: z
    .string()
    .min(1)
    .regex(/^(0(\.\d+)?|[1-9]\d*(\.\d+)?)$/, {
      message: "Amount must be a valid number greater than 0",
    }),
});
