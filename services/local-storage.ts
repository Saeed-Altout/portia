export class LocalStorage {
  private static instance: LocalStorage;
  private constructor() {}

  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  setItem(key: string, value: string): void {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error(`Error setting ${key} in localStorage`, error);
      }
    }
  }

  getItem(key: string): string | null {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as string) : null;
      } catch (error) {
        console.error(`Error getting ${key} from localStorage`, error);
        return null;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from localStorage`, error);
      }
    }
  }

  setAccessToken(accessToken: string): void {
    this.setItem("accessToken", accessToken);
  }

  getAccessToken(): string | null {
    return this.getItem("accessToken");
  }

  removeAccessToken(): void {
    this.removeItem("accessToken");
  }

  setRefreshToken(refreshToken: string): void {
    this.setItem("refreshToken", refreshToken);
  }

  getRefreshToken(): string | null {
    return this.getItem("refreshToken");
  }

  removeRefreshToken(): void {
    this.removeItem("refreshToken");
  }
}

export default LocalStorage.getInstance();
