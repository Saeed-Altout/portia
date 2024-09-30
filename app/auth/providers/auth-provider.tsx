'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import cookieStorage from '@/services/cookie-storage';

interface AuthContextProps {
	isAuthenticated: boolean;
	token: string | null;
}

const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: false,
	token: null,
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, _setIsAuthenticated] = useState<boolean>(false);
	const [token, _setToken] = useState<string | null>(null);
	const [isMounted, setIsMounted] = useState<boolean>(false);

	const setIsAuthenticated = () => {
		const accessToken = cookieStorage.getAccessToken();
		if (accessToken) {
			_setIsAuthenticated(true);
		} else {
			_setIsAuthenticated(false);
		}
	};
	const setToken = () => {
		const accessToken = cookieStorage.getAccessToken();
		if (accessToken) {
			_setToken(accessToken);
		} else {
			_setToken(null);
		}
	};

	useEffect(() => {
		setIsAuthenticated();
		setToken();
	}, []);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <AuthContext.Provider value={{ isAuthenticated, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
