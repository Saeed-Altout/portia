import * as z from 'zod';

export const userProfileSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string(),
	current_password: z.string(),
	new_password: z.string(),
	new_password_confirmation: z.string(),
});

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
