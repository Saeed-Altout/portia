export enum Routes {
	DEFAULT_PAGE = '/',
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',

	VERIFY_RESET_EMAIL = '/auth/verify-reset-email',
	RESET_PASSWORD = '/auth/password-reset',
	SEND_RESET_EMAIL = '/auth/send-reset-email',
	NEW_PASSWORD = '/auth/new-password',

	VERIFY_CODE = '/auth/verify-code',
	VERIFY_EMAIL = '/auth/verify-email',
	EMAIL_CONFIRMED = '/auth/email-confirmed',
}

export enum QueryKeys {
	LOGIN = 'auth.login',
	REGISTER = 'auth.register',
	LOGIN_WITH_GOOGLE = 'auth.login-with-google',
	LOGOUT = 'auth.logout',

	SEND_RESET_EMAIL = 'auth.send-reset-email',
	VERIFY_RESET_EMAIL = 'auth.verify-reset-email',
	RESET_PASSWORD = 'auth.reset-password',
	SET_NEW_PASSWORD = 'auth.set-new-password',

	VERIFY_CODE = 'auth.verify-code',
	VERIFY_EMAIL = 'auth.verify-email',
	EMAIL_CONFIRMED = 'auth.email-confirmed',
	RESEND_VERIFICATION_CODE = 'auth.resend-verification-code',
}
