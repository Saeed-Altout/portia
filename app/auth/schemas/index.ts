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
	first_name: z.string().min(2, 'First must be at least 2 characters').max(255, { message: '' }),
	last_name: z.string().min(2, 'Last must be at least 2 characters').max(255, { message: '' }),
	email: z.string().email('Invalid email address').max(255, { message: '' }),
	password: z.string().min(8, 'Password must be at least 8 characters'),
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
