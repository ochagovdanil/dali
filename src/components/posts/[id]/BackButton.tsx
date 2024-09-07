'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
	const router = useRouter();

	return (
		<a
			className='inline-block underline text-blue-400 cursor-pointer mt-6'
			onClick={() => router.back()}
		>
			Вернуться назад
		</a>
	);
}
