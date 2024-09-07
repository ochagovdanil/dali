import { getPostById, getPosts } from '@/utils/actions';
import dynamic from 'next/dynamic';

const BackButton = dynamic(() => import('@/components/posts/[id]/BackButton'));

interface PostArgumentsType {
	params: {
		id: number;
	};
}

export async function generateMetadata({ params }: PostArgumentsType) {
	const post = await getPostById(Number(params.id));

	return {
		title: post ? post.title : 'Post Error',
		description: post ? post.description : 'Post Description Error',
	};
}

export async function generateStaticParams() {
	const posts = await getPosts();

	return posts.map(post => ({
		id: post.id.toString(),
	}));
}

export default async function Post({ params }: PostArgumentsType) {
	const post = await getPostById(Number(params.id));

	return (
		<div className='container'>
			<BackButton />
			{post ? (
				<>
					<h1 className='text-center mt-12 font-bold text-4xl text-gray-700'>
						{post.title}
					</h1>
					<p className='text-center mt-16 text-gray-600 leading-10'>
						{post.description}
					</p>
				</>
			) : (
				<h3 className='font-bold text-lg text-center text-red-400 mt-12'>
					Что-то пошло не так!
				</h3>
			)}
		</div>
	);
}
