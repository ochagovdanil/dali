import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { KindePermission } from '@kinde-oss/kinde-auth-nextjs/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Панель админа',
	description: process.env.PUBLIC_NEXT_WEBSITE_CONTENT_DESCRIPTION,
};

export default async function page() {
	const { getPermission } = getKindeServerSession();

	const isAdmin: KindePermission | null = await getPermission(
		'get-admin-panel'
	);

	if (isAdmin?.isGranted)
		return (
			<div className='container'>
				<h1 className='text-2xl font-bold text-green-600 text-center mt-36'>
					Панель администратора.
				</h1>
			</div>
		);

	return (
		<div className='container'>
			<h1 className='text-2xl font-bold text-red-500 text-center mt-36'>
				У вас нет прав доступа к данной странице!
			</h1>
		</div>
	);
}
