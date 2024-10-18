interface CookieOptions {
  days?: number;
  path?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

export const cookies = {
  handleCookieError(action: string, key: string, error: unknown): void {
    console.error(`Error ${action} ${key} in cookies`, error);
  },

  getExpiresDate(days: number): string {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return date.toUTCString();
  },

  buildCookieString(
    key: string,
    value: string,
    options: CookieOptions = {}
  ): string {
    const { days = 7, path = "/", secure = false, sameSite = "Lax" } = options;
    let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}; path=${path}; SameSite=${sameSite}; expires=${this.getExpiresDate(
      days
    )}`;
    if (secure) cookieString += "; Secure";
    return cookieString;
  },

  setCookie<T>(key: string, value: T, options: CookieOptions = {}): void {
    try {
      const cookieString = this.buildCookieString(
        key,
        JSON.stringify(value),
        options
      );
      document.cookie = cookieString;
    } catch (error) {
      this.handleCookieError("setting", key, error);
    }
  },

  getCookie<T>(key: string): T | null {
    try {
      const nameEQ = `${encodeURIComponent(key)}=`;
      const cookies = document.cookie.split(";");

      for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
          return JSON.parse(
            decodeURIComponent(cookie.substring(nameEQ.length))
          );
        }
      }
    } catch (error) {
      this.handleCookieError("getting", key, error);
    }
    return null;
  },

  removeCookie(key: string, path: string = "/"): void {
    try {
      document.cookie = `${encodeURIComponent(
        key
      )}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax`;
    } catch (error) {
      this.handleCookieError("removing", key, error);
    }
  },
};
