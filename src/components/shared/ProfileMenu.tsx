'use client';

import {
	LogoutLink,
	useKindeBrowserClient,
} from '@kinde-oss/kinde-auth-nextjs';
import { KindePermission } from '@kinde-oss/kinde-auth-nextjs/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileMenu() {
	const { user, getPermission } = useKindeBrowserClient();

	const isAdmin: KindePermission | null = getPermission('get-admin-panel'); // Used for identifying if the current user has admin rights
	const adminLinkStyle: string = `py-2 px-4 block ${
		isAdmin?.isGranted
			? 'hover:bg-gray-50 cursor-pointer'
			: 'cursor-default bg-gray-100 text-gray-400 pointer-events-none'
	}`; // Used for TailwindCSS styling 'Управление сайтом' link item

	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	return (
		<div>
			<Image
				src={
					user?.picture?.includes('gravatar')
						? `https://placehold.co/40x40/000/FFF?text=${user?.given_name?.slice(
								0,
								1
						  )}${user?.family_name?.slice(0, 1)}`
						: user?.picture!
				}
				alt='Профиль'
				title={user?.email || ''}
				height={40}
				width={40}
				className='rounded-full cursor-pointer border-gray-700 border-2'
				onClick={() => setIsMenuShown(!isMenuShown)}
			/>
			{isMenuShown && (
				<div className='absolute bg-white rounded-md mt-2 ml-[-9rem] p-2 shadow-md border-gray-200 border-[0.0625rem]'>
					<ul>
						<Link
							href='/profile'
							className='py-2 px-4 hover:bg-gray-50 cursor-pointer block'
						>
							Профиль
						</Link>
						<Link href='/admin' className={adminLinkStyle}>
							Управление сайтом
						</Link>
						<LogoutLink className='py-2 px-4 hover:bg-gray-50 cursor-pointer block'>
							Выйти
						</LogoutLink>
					</ul>
				</div>
			)}
		</div>
	);
}
