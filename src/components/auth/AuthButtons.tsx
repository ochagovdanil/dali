'use client';

import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

export default function AuthButtons() {
	return (
		<div className='w-96 mt-12 flex flex-col gap-y-4 mx-auto'>
			<LoginLink className='bg-gray-800 border-gray-800 border-2 text-white rounded-md py-3 hover:bg-transparent hover:border-gray-700 hover:text-gray-700'>
				Войти в аккаунт
			</LoginLink>
			<RegisterLink className='bg-transparent border-gray-800 border-2 rounded-md py-3 hover:bg-gray-800 hover:text-white'>
				Создать новый аккаунт
			</RegisterLink>
		</div>
	);
}
