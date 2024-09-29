'use client';

import * as React from 'react';
import localStorage from '@/services/local-storage-service';

interface EmailContextProps {
	email: string;
}

const EmailContext = React.createContext<EmailContextProps>({
	email: '',
});

interface EmailProviderProps {
	children: React.ReactNode;
}

export const EmailProvider = ({ children }: EmailProviderProps) => {
	const [email, setEmail] = React.useState<string>('');
	const [isMounted, setIsMounted] = React.useState<boolean>(false);

	React.useEffect(() => {
		setIsMounted(true);
		const currentEmail = localStorage.getEmail();

		if (!!currentEmail) {
			setEmail(currentEmail);
		}
	}, []);

	if (!isMounted) {
		return null;
	}

	return <EmailContext.Provider value={{ email }}>{children}</EmailContext.Provider>;
};

export const useEmail = () => React.useContext(EmailContext);
