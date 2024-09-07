import { Post } from '@/models/Post';
import { getPosts } from '@/utils/actions';
import { Metadata } from 'next';
import { lazy, Suspense } from 'react';

const PostComponent = lazy(() => import('@/components/posts/Post'));

export const metadata: Metadata = {
	title: 'Главная',
	description: process.env.PUBLIC_NEXT_WEBSITE_CONTENT_DESCRIPTION,
};

export default async function Home() {
	const posts = await getPosts();

	return (
		<div className='container text-center mt-16'>
			<h1 className='font-bold text-4xl'>Все статьи</h1>
			<div className='grid grid-cols-3 gap-8 my-10'>
				{posts.map((post: Post) => (
					<Suspense
						key={post.id}
						fallback={<p>Загружаем список статей...</p>}
					>
						<PostComponent key={post.id} post={post} />
					</Suspense>
				))}
			</div>
		</div>
	);
}
