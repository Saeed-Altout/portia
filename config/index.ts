export const siteConfig = {
	name: 'Portia',
	description:
		'Get ultra-stable mobile proxies with unlimited data and effortless country switching ⎯⎯ perfectly tailored for developers, social media managers, E-commerce, and digital marketing professionals.',
};

export type SiteConfig = typeof siteConfig;

export enum Routes {
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',

	EMAIL_VERIFICATION = '/auth/email-verification',
	CODE_VERIFICATION = '/auth/code-verification',
	EMAIL_VERIFIED = '/auth/email-verified',

	SEND_EMAIL_TO_RESET_PASSWORD = '/auth/send-email-to-reset-password',
	CHECK_EMAIL = '/auth/check-your-email',
	SET_NEW_PASSWORD = '/auth/set-new-password',
	PASSWORD_RESET = '/auth/password-reset',

	DEFAULT_PAGE = '/',
	CONTACT_US = '/contact-us',
}

export enum QueryKeys {
	GET_FAQS = 'faq',
	GET_ALL_FAQS = 'all-faqs',
	LOGIN = 'login',
	REGISTER = 'register',
	CONFIRM_VERIFICATION_CODE = 'confirm-verification-code',
	LOGIN_WITH_GOOGLE = 'login-with-google',
	RESEND_VERIFICATION_CODE = 'resend-verification-code',
	SEND_EMAIL_TO_RESET_PASSWORD = 'send-email-to-reset-password',
	SET_NEW_PASSWORD = 'set-new-password',
	LOGOUT = 'logout',
}
