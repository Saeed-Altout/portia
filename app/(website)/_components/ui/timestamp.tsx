import * as React from 'react';

interface TimestampProps {
	label: string;
}

export const Timestamp = ({ label }: TimestampProps) => {
	return <span className='text-[#03055E] font-semibold text-sm'>{label}</span>;
};
