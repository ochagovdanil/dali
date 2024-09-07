import { insertNewPost } from '@/utils/actions';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Новый пост',
	description: process.env.PUBLIC_NEXT_WEBSITE_CONTENT_DESCRIPTION,
};

export default async function NewPost() {
	return (
		<div className='container'>
			<form
				action={insertNewPost}
				className='mx-auto max-w-[40rem] flex flex-col gap-6 mt-20'
			>
				<input
					type='text'
					placeholder='Заголовок'
					name='title'
					className='w-full text-gray-700 border-gray-900 border-[0.0625rem] py-3 px-4 rounded-md focus:border-2 hover:border-2'
					required
				/>
				<textarea
					placeholder='Содержание'
					name='description'
					className='w-full h-56 text-gray-500 border-gray-700 border-[0.0625rem] py-3 resize-none px-4 rounded-md focus:border-2 hover:border-2'
					required
				></textarea>
				<input
					type='submit'
					value='Отправить новую статью'
					className='w-full py-3 px-4 bg-gray-900 text-white rounded-md cursor-pointer hover:bg-gray-800'
				/>
			</form>
		</div>
	);
}
