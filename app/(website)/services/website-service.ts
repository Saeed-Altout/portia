import { AxiosResponse } from 'axios';

import { _axios } from '@/lib/axios';

export const websiteService = {
	async sendContactMessage(data: ContactMessageBody): Promise<ContactMessageResponse> {
		try {
			const response: AxiosResponse<ContactMessageResponse> = await _axios.post<ContactMessageResponse>(
				process.env.NEXT_PUBLIC_CONTACT_MESSAGE_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
