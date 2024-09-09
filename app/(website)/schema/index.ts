import * as z from "zod";

export const formContactSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phoneNumber: z.object({
    country: z
      .string()
      .min(2, { message: "Country is required!" })
      .default("syria"),
    number: z
      .string()
      .min(9, { message: "Phone number must be at least 9 numbers." }),
  }),
  message: z.string().optional(),
  agreeToPrivacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to our friendly privacy policy.",
  }),
});
