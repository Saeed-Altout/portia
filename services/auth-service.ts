import { AxiosResponse } from 'axios';

import { _axios } from '@/lib/axios';

export const authService = {
	async register(data: RegisterBody): Promise<RegisterResponse> {
		try {
			const response: AxiosResponse<RegisterResponse> = await _axios.post<RegisterResponse>(
				process.env.NEXT_PUBLIC_REGISTER_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async login(data: LoginBody): Promise<LoginResponse> {
		try {
			const response: AxiosResponse<LoginResponse> = await _axios.post<LoginResponse>(
				process.env.NEXT_PUBLIC_LOGIN_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async confirmVerificationCode(data: ConfirmVerificationCodeBody): Promise<ConfirmVerificationCodeResponse> {
		try {
			const response: AxiosResponse<ConfirmVerificationCodeResponse> =
				await _axios.post<ConfirmVerificationCodeResponse>(
					process.env.NEXT_PUBLIC_CONFIRM_VERIFICATION_CODE_ENDPOINT!,
					data
				);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async resendVerificationCode(email: ResendVerificationCodeBody): Promise<ResendVerificationCodeResponse> {
		try {
			const response: AxiosResponse<ResendVerificationCodeResponse> = await _axios.post<ResendVerificationCodeResponse>(
				process.env.NEXT_PUBLIC_RESEND_VERIFICATION_CODE_ENDPOINT!,
				email
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async sendEmailToResetPassword(email: SendEmailToResetPasswordBody): Promise<SendEmailToResetPasswordResponse> {
		try {
			const response: AxiosResponse<SendEmailToResetPasswordResponse> =
				await _axios.post<SendEmailToResetPasswordResponse>(
					process.env.NEXT_PUBLIC_SEND_EMAIL_TO_RESET_PASSWORD_ENDPOINT!,
					email
				);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async setNewPassword(data: SetNewPasswordBody): Promise<SetNewPasswordResponse> {
		try {
			const response: AxiosResponse<SetNewPasswordResponse> = await _axios.post<SetNewPasswordResponse>(
				process.env.NEXT_PUBLIC_SET_NEW_PASSWORD_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async loginWithGoogle(): Promise<void> {
		try {
			await _axios.get(process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE_ENDPOINT!);
		} catch (error) {
			throw error;
		}
	},

	async logout(): Promise<void> {
		try {
			await _axios.get(process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT!);
		} catch (error) {
			throw error;
		}
	},
};
