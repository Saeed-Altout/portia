declare type SendContactMessageBody = {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	message: string;
};

declare type SendContactMessageResponse = {
	success: boolean;
	message: string | string[];
};

declare type RootObj<T = any> = {
	success: boolean;
	data: T;
};

declare type Faq = {
	id: number;
	question: string;
	answer: string;
	created_at: Date | string;
	updated_at: Date | string;
};
declare type Offer = {};
