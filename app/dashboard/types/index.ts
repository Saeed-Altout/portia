declare type UpdateUserProfileResponse = {
	success: boolean;
	message: string | string[];
};

declare type UpdateUserProfileBody = {
	first_name: string;
	last_name: string;
	email: string;
	current_password: string;
	new_password: string;
	new_password_confirmation: string;
};

declare type UserProfileResponse = {
	success: boolean;
	message: string | string[];
};

declare type UserProfile = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
};
