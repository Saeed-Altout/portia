declare type RegisterBody = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	referred_by?: string;
};

declare type RegisterResponse = {
	success: boolean;
	message: string | string[];
};

declare type LoginBody = {
	email: string;
	password: string | string[];
};

declare type LoginResponse = {
	success: boolean;
	message: string | string[];
	access_token: string;
	token_type: string;
	expires_in: string;
};

declare type VerifyCodeMutationBody = {
	email: string;
	code: string;
};

declare type VerifyCodeMutationResponse = {
	success: boolean;
	message: string | string[];
	access_token: string;
	token_type: string;
	expires_in: string;
};

declare type ResendVerificationCodeBody = {
	email: string;
};

declare type ResendVerificationCodeResponse = {
	success: boolean;
	message: string | string[];
};

declare type SendResetEmailBody = {
	email: string;
};

declare type SendResetEmailResponse = {
	success: boolean;
	message: string | string[];
};

declare type SetNewPasswordBody = {
	password: string;
	password_confirmation: string;
};

declare type SetNewPasswordResponse = {
	success: boolean;
	message: string | string[];
};

declare type ErrorResponse = {
	success: boolean;
	message: string | string[];
};

declare type User = {
	id: string;
	name: string;
	email: string;
};

declare type MemoryUser = {
	email: string;
	password: string;
};
