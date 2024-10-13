import * as z from 'zod';
import { userProfileSchema } from '@dashboard/schemas';

export const getModifiedData = (data: z.infer<typeof userProfileSchema>) => {
	const modifiedData: Partial<z.infer<typeof userProfileSchema>> = {};
	for (const [key, value] of Object.entries(data)) {
		if (value || value !== '') {
			modifiedData[key as keyof z.infer<typeof userProfileSchema>] = value;
		}
	}
	return modifiedData;
};
