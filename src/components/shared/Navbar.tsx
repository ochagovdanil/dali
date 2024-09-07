'use client';

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileMenu from './ProfileMenu';

export default function Navbar() {
	const { isAuthenticated, isLoading } = useKindeBrowserClient();
	const pathname: string = usePathname(); // Used for identifying the current active navbar link

	if (!isAuthenticated || isLoading) return <></>;

	return (
		<nav className='border-b-gray-400 border-b-[0.0625rem] py-5'>
			<div className='container flex flex-wrap justify-between'>
				<Image
					src={'/logo.png'}
					alt='Логотип'
					title='DaLi'
					height={30}
					width={40}
				/>
				<ul className='flex gap-x-10 items-center'>
					<li>
						<Link
							href='/home'
							className={`hover:text-gray-500 ${
								pathname === '/home' && 'text-gray-500'
							}`}
						>
							Главная
						</Link>
					</li>
					<li>
						<Link
							href='/new-post'
							className={`hover:text-gray-500 ${
								pathname === '/new-post' && 'text-gray-500'
							}`}
						>
							Написать пост
						</Link>
					</li>
					<li>
						<ProfileMenu />
					</li>
				</ul>
			</div>
		</nav>
	);
}
