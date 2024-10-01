import * as z from 'zod';

export const settingsSchema = z.object({
	first_name: z.string().min(2, { message: 'First name is required' }),
	last_name: z.string().min(2, { message: 'Last name is required' }),
	email: z.string().email('Invalid email address'),
	current_password: z.string().min(8, 'Current password must be at least 8 characters'),
	new_password: z.string().min(8, 'New password must be at least 8 characters'),
	new_password_confirmation: z.string().min(8, 'Confirm password must be at least 8 characters'),
});

export type SettingsSchema = z.infer<typeof settingsSchema>;
export const initialValues = {
	name: {
		firstName: '',
		lastName: '',
	},
	email: '',
	password: {
		currentPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	},
	affiliateLink: '',
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
	package: '',
	plan: '',
	amount: '',
	provider: 'First available uk network & location',
	ipRotation: '',
	proxyType: '',
	autoRenew: false,
	username: '',
	password: '',
};
