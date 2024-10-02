import { AxiosResponse } from 'axios';

import { _axios } from '@/lib/axios';

export const websiteService = {
	async sendContactMessage(data: SendContactMessageBody): Promise<SendContactMessageResponse> {
		try {
			const response: AxiosResponse<SendContactMessageResponse> = await _axios.post<SendContactMessageResponse>(
				process.env.NEXT_PUBLIC_CONTACT_MESSAGE_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getAllFaqs(): Promise<FaqsRootObj<Faq[]>> {
		try {
			const response: AxiosResponse<FaqsRootObj<Faq[]>> = await _axios.get(process.env.NEXT_PUBLIC_ALL_FAQ_ENDPOINT!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getFaqs(): Promise<FaqsRootObj<Faq[]>> {
		try {
			const response: AxiosResponse<FaqsRootObj<Faq[]>> = await _axios.get(process.env.NEXT_PUBLIC_FAQ_ENDPOINT!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateUserProfile(data: UpdateUserProfileBody): Promise<UpdateUserProfileResponse> {
		try {
			const response: AxiosResponse<UpdateUserProfileResponse> = await _axios.post(
				process.env.NEXT_PUBLIC_USER_PROFILE_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
