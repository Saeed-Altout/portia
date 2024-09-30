interface CookieOptions {
	days?: number;
	path?: string;
	secure?: boolean;
	sameSite?: 'Strict' | 'Lax' | 'None';
}

export class CookieStorage {
	private static instance: CookieStorage;

	private constructor() {}

	public static getInstance(): CookieStorage {
		if (!CookieStorage.instance) {
			CookieStorage.instance = new CookieStorage();
		}
		return CookieStorage.instance;
	}

	private handleCookieError(action: string, key: string, error: unknown): void {
		console.error(`Error ${action} ${key} in cookies`, error);
	}

	private getExpiresDate(days: number): string {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		return date.toUTCString();
	}

	private buildCookieString(key: string, value: string, options: CookieOptions = {}): string {
		const { days = 7, path = '/', secure = false, sameSite = 'Lax' } = options;
		let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(
			value
		)}; path=${path}; SameSite=${sameSite}; expires=${this.getExpiresDate(days)}`;
		if (secure) cookieString += '; Secure';
		return cookieString;
	}

	public setCookie<T>(key: string, value: T, options: CookieOptions = {}): this {
		try {
			const cookieString = this.buildCookieString(key, JSON.stringify(value), options);
			document.cookie = cookieString;
		} catch (error) {
			this.handleCookieError('setting', key, error);
		}
		return this;
	}

	public getCookie<T>(key: string): T | null {
		try {
			const nameEQ = `${encodeURIComponent(key)}=`;
			const cookies = document.cookie.split(';');

			for (let cookie of cookies) {
				cookie = cookie.trim();
				if (cookie.indexOf(nameEQ) === 0) {
					return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
				}
			}
		} catch (error) {
			this.handleCookieError('getting', key, error);
		}
		return null;
	}

	public removeCookie(key: string, path: string = '/'): this {
		try {
			document.cookie = `${encodeURIComponent(key)}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax`;
		} catch (error) {
			this.handleCookieError('removing', key, error);
		}
		return this;
	}

	// Methods for Access Token, Refresh Token, and User
	public setAccessToken(accessToken: string, options: CookieOptions = {}): this {
		return this.setCookie('accessToken', accessToken, options);
	}

	public getAccessToken(): string | null {
		return this.getCookie<string>('accessToken');
	}

	public removeAccessToken(): this {
		return this.removeCookie('accessToken');
	}

	public setRefreshToken(refreshToken: string, options: CookieOptions = {}): this {
		return this.setCookie('refreshToken', refreshToken, options);
	}

	public getRefreshToken(): string | null {
		return this.getCookie<string>('refreshToken');
	}

	public removeRefreshToken(): this {
		return this.removeCookie('refreshToken');
	}

	public setUser(user: User, options: CookieOptions = {}): this {
		return this.setCookie('user', user, options);
	}

	public getUser(): User | null {
		return this.getCookie<User>('user');
	}

	public removeUser(): this {
		return this.removeCookie('user');
	}

	public setMemoryUser(user: MemoryUser, options: CookieOptions = {}): this {
		return this.setCookie('memory-user', user, options);
	}
	public getMemoryUser(): MemoryUser | null {
		return this.getCookie<MemoryUser>('memory-user');
	}

	public removeMemoryUser(): this {
		return this.removeCookie('memory-user');
	}
}

export default CookieStorage.getInstance();
