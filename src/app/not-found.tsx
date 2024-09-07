import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Страница не найдена',
	description: process.env.PUBLIC_NEXT_WEBSITE_CONTENT_DESCRIPTION,
};

export default function NotFound() {
	return (
		<section className='h-full flex flex-col justify-center items-center'>
			<div className='text-center my-10'>
				<h1 className='font-bold text-4xl'>404</h1>
				<p className='text-lg mt-4'>Страница не найдена</p>
				<Link href='/home' className='text-gray-600 mt-2 underline'>
					Вернуться на главную
				</Link>
			</div>
		</section>
	);
}
