declare type FaqsRootObj<T = any> = {
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
