import { Post } from '@/models/Post';
import Link from 'next/link';

interface PostArgumentsType {
	post: Post;
}

export default function PostComponent({ post }: PostArgumentsType) {
	return (
		<Link href={`/post/${post.id}`}>
			<article className='h-[20rem] overflow-hidden bg-gray-50 rounded-md p-6 cursor-pointer hover:bg-gray-100 hover:shadow-md'>
				<h3 className='font-bold text-xl text-gray-700'>
					{post.title}
				</h3>
				<p className='text-[0.9rem] text-gray-600 text-left mt-6'>
					{post.description}
				</p>
			</article>
		</Link>
	);
}
