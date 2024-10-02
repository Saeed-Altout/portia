'use client';

import * as React from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';
import { Key, User } from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { Modal } from '@dashboard/_components/ui/modal';
import { CustomField, FiledType } from '@/components/ui/custom-field';

import { useChangeProxyAuthenticationsModal } from '@/app/dashboard/hooks/modals/use-change-proxy-authentications-modal';

const changeProxyAuthenticationsSchema = z.object({
	username: z.string().min(2),
	password: z.string().min(2),
});

export const ChangeProxyAuthenticationsModal = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const changeProxyAuthenticationsModal = useChangeProxyAuthenticationsModal();

	const form = useForm<z.infer<typeof changeProxyAuthenticationsSchema>>({
		resolver: zodResolver(changeProxyAuthenticationsSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof changeProxyAuthenticationsSchema>) => {
		setIsLoading(true);
		try {
			setTimeout(() => {
				onClose();
				console.log(values);
				toast.success('Change my proxy location successfully');
			}, 2000);
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};

	const onClose = () => {
		form.reset();
		setIsLoading(false);
		changeProxyAuthenticationsModal.onClose();
	};

	return (
		<Modal
			title='Change my proxy (id:24) Authentications'
			isOpen={changeProxyAuthenticationsModal.isOpen}
			onClose={onClose}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<div className='space-y-4'>
						<CustomField
							name='username'
							label='Proxy Authentications'
							placeholder='Username'
							icon={User}
							type={FiledType.TEXT}
							isLoading={isLoading}
						/>
						<CustomField
							name='password'
							placeholder='Password'
							icon={Key}
							type={FiledType.TEXT}
							isLoading={isLoading}
						/>
					</div>

					<div className='flex justify-between items-center gap-5'>
						<Button
							type='button'
							variant='outline'
							className='basis-1/2'
							disabled={isLoading}
							onClick={() => onClose()}
						>
							Cancel
						</Button>
						<Button type='submit' variant='default' className='basis-1/2' disabled={isLoading}>
							{isLoading ? <BeatLoader color='#fff' /> : 'Update'}
						</Button>
					</div>
				</form>
			</Form>
		</Modal>
	);
};
