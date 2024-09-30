/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
	'/',
	'/blogs',
	'/contact-us',
	'/faqs',
	'/locations',
	'/our-plans',
	'/pricing',
	'privacy-policy',
	'/testimonials',
	'/why-portia-io',
	'/auth/email-confirmed',
	'/auth/password-reset',
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /
 * @type {string[]}
 */
export const authRoutes = [
	'/auth/login',
	'/auth/register',
	'/auth/verify-email',
	'/auth/verify-code',
	'/auth/send-reset-email',
	'/auth/verify-reset-email',
	'/auth/new-password',
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/';
