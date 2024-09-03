enum Categories {
	'DESIGN' = 'Design',
	'PODCASTS' = 'Podcasts',
	'LEADERSHIP' = 'Leadership',
	'RESEARCH' = 'Research',
	'CUSTOMER_SUCCESS' = 'Customer Success',
	'MANAGEMENT' = 'Management',
	'SAAS' = 'SaaS',
	'TOOLS' = 'Tools',
	'PRESENTATIONS' = 'Presentation',
	'SOFTWARE_DEVELOPMENT' = 'Software Development',
	'PRODUCT' = 'Product',
	'FRAMEWORKS' = 'Frameworks',
}

export const renderStyleCategory = (category: string) => {
	switch (category) {
		case Categories.DESIGN:
		case Categories.PODCASTS:
		case Categories.LEADERSHIP:
			return 'bg-[#D4D4FF] text-[#03055E]';
		case Categories.RESEARCH:
			return 'bg-[#EEF4FF] text-[#3538CD]';
		case Categories.CUSTOMER_SUCCESS:
		case Categories.MANAGEMENT:
			return 'bg-[#F8F9FC] text-[#363F72]';
		case Categories.SAAS:
		case Categories.TOOLS:
		case Categories.PRESENTATIONS:
			return 'bg-[#FDF2FA] text-[#C11574]';
		case Categories.SOFTWARE_DEVELOPMENT:
			return 'bg-[#D4FFFE] text-[#035E5C]';
		case Categories.PRODUCT:
			return 'bg-[#F0F9FF] text-[#026AA2]';
		case Categories.FRAMEWORKS:
			return 'bg-[#FFF6ED] text-[#C4320A]';
		default:
			return null;
	}
};
