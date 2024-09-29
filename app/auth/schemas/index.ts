import * as z from 'zod';

export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const initialLoginFormValues = {
	email: '',
	password: '',
};

export const registerSchema = z.object({
	first_name: z
		.string()
		.trim()
		.min(2, { message: 'First name must be at least 2 characters long' })
		.max(255, { message: 'First name must be less than 255 characters' }),

	last_name: z
		.string()
		.trim()
		.min(2, { message: 'Last name must be at least 2 characters long' })
		.max(255, { message: 'Last name must be less than 255 characters' }),

	email: z
		.string()
		.trim()
		.email({ message: 'Please enter a valid email address' })
		.max(255, { message: 'Email address must be less than 255 characters' })
		.transform((email) => email.toLowerCase()),

	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.max(128, { message: 'Password must be less than 128 characters long' })
		.regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
		.regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
		.regex(/\d/, { message: 'Password must contain at least one number' })
		.regex(/[\W_]/, { message: 'Password must contain at least one special character' }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export const initialRegisterFormValues = {
	first_name: '',
	last_name: '',
	email: '',
	password: '',
};

export const newPasswordSchema = z.object({
	password: z.string().min(8, 'Password must be at least 8 characters'),
	password_confirmation: z.string().min(8, 'Confirm Password must be at least 8 characters'),
});
export type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;
export const initialNewPasswordValues = {
	password: '',
	password_confirmation: '',
};

export const sendResetEmailSchema = z.object({
	email: z.string().email('Invalid email address'),
});
export type SendResetEmailFormValues = z.infer<typeof sendResetEmailSchema>;
export const initialSendResetEmailValues = {
	email: '',
};

export const verifyCodeSchema = z.object({
	code: z.string().min(6, 'Code is required!'),
});
export type VerifyCodeFormValues = z.infer<typeof verifyCodeSchema>;
export const initialVerifyCodeValues = {
	code: '',
};
