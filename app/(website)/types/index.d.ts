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

declare type Plan = {
	id: number;
	name: string;
};

declare type Feature = {
	id: number;
	feature_group_id: number;
	name: string;
	description: string | null;
	value: string | boolean | null;
	created_at: Date | string;
	updated_at: Date | string;
};

declare type FeatureGroup = {
	id: number;
	name: string;
	package_id: number;
	features: Feature[];
	created_at: Date | string;
	updated_at: Date | string;
};

declare type Package = {
	id: number;
	name: string;
	description: string | null;
	created_at: Date | string;
	updated_at: Date | string;
	feature_groups: FeatureGroup[];
};

declare type Offer = {
	id: number;
	amount: number;
	cost: string;
	is_top: boolean;
	plan: Plan;
	package: Package;
	created_at: Date | string;
	updated_at: Date | string;
};
