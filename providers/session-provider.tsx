'use client';

import { useState, useEffect, createContext, useContext } from 'react';

import cookieStorage from '@/services/cookie-storage';

export interface User {
	id: string;
	name: string;
	email: string;
}

export interface SessionContextProps {
	token: string | null;
}

export const SessionContext = createContext<SessionContextProps>({
	token: null,
});

interface SessionProviderProps {
	children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
	const [token, setToken] = useState<string | null>(null);
	const [isMounted, setIsMounted] = useState<boolean>(false);

	const setSession = (token: string | null) => {
		if (token) {
			setToken(token);
		} else {
			setToken(null);
		}
	};

	useEffect(() => {
		const accessToken = cookieStorage.getAccessToken();
		setSession(accessToken);
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <SessionContext.Provider value={{ token }}>{children}</SessionContext.Provider>;
};
export const useSession = () => useContext(SessionContext);
