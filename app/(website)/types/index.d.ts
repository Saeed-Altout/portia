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

declare type FeatureGroup = {
	id: number;
	name: string;
	package_id: number;
	features: {
		id: number;
		feature_group_id: number;
		name: string;
		description: string | null;
		value: string | boolean | null;
		created_at: Date | string;
		updated_at: Date | string;
	}[];
	created_at: Date | string;
	updated_at: Date | string;
};

declare type Offer = {
	id: number;
	amount: number;
	cost: string;
	is_top: boolean;
	plan: Plan;
	package: {
		id: number;
		name: string;
		description: string | null;
		created_at: Date | string;
		updated_at: Date | string;
		feature_groups: FeatureGroup[];
	};
	created_at: Date | string;
	updated_at: Date | string;
};

declare type FeaturesOffers = {
	success: boolean;
	message: string;
	data: {
		id: number;
		name: string;
		name: string;
		packages: {
			id: number;
			package_id: number;
			value: string;
		}[];
	}[];
};
