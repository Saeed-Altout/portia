import * as z from 'zod';

export const formContactSchema = z.object({
	first_name: z.string().min(2, {
		message: 'First Name must be at least 2 characters.',
	}),
	last_name: z.string().min(2, {
		message: 'Last Name must be at least 2 characters.',
	}),
	email: z.string().email(),
	phone: z.string().min(9, { message: 'Phone number must be at least 9 numbers.' }),
	message: z.string(),
});

export type FormContactValues = z.infer<typeof formContactSchema>;

export const initialFormContactValues = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: { country: '', number: '' },
	agreeToPrivacyPolicy: false,
};

export const searchByEmailSchema = z.object({
	email: z.string().email(),
});

export type SearchByEmailSchema = z.infer<typeof searchByEmailSchema>;
export const initialSearchByEmailValues = { email: '' };
