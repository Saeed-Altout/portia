export class LocalStorage {
  private static instance: LocalStorage;
  private constructor() {}

  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
    }
    return LocalStorage.instance;
  }

  private handleStorageError(
    action: string,
    key: string,
    error: unknown
  ): void {
    console.error(`Error ${action} ${key} in localStorage`, error);
  }

  public setItem<T>(key: string, value: T): this {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        this.handleStorageError("setting", key, error);
      }
    }
    return this;
  }

  public getItem<T>(key: string): T | null {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      } catch (error) {
        this.handleStorageError("getting", key, error);
        return null;
      }
    }
    return null;
  }

  public removeItem(key: string): this {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        this.handleStorageError("removing", key, error);
      }
    }
    return this;
  }

  public setAccessToken(accessToken: string): this {
    return this.setItem("accessToken", accessToken);
  }

  public getAccessToken(): string | null {
    return this.getItem<string>("accessToken");
  }

  public removeAccessToken(): this {
    return this.removeItem("accessToken");
  }

  public setRefreshToken(refreshToken: string): this {
    return this.setItem("refreshToken", refreshToken);
  }

  public getRefreshToken(): string | null {
    return this.getItem<string>("refreshToken");
  }

  public removeRefreshToken(): this {
    return this.removeItem("refreshToken");
  }

  public setUser(user: User): this {
    return this.setItem("user", user);
  }

  public getUser(): User | null {
    return this.getItem<User>("user");
  }

  public removeUser(): this {
    return this.removeItem("user");
  }

  public setEmail(email: string): this {
    return this.setItem("email", email);
  }

  public getEmail(): string | null {
    return this.getItem<string>("email");
  }

  public removeEmail(): this {
    return this.removeItem("email");
  }
}

export default LocalStorage.getInstance();
