import AuthButtons from '@/components/auth/AuthButtons';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
	const { isAuthenticated } = getKindeServerSession();
	const isLoggedIn = await isAuthenticated();

	if (isLoggedIn) redirect('/home');

	return (
		<main className='h-full flex flex-col justify-center items-center'>
			<div className='text-center my-10'>
				<Image
					src='/logo.png'
					alt='Логотип'
					title='DaLi'
					height={60}
					width={60}
					className='block mx-auto'
				/>
				<h3 className='mt-6 font-bold text-3xl'>DaLi</h3>
				<p className='mt-2'>
					Простая и минималистичная возможность написания собственного
					блога
				</p>
				<AuthButtons />
			</div>
		</main>
	);
}
