'use server';

import { posts } from '@/data/posts';
import { Post } from '@/models/Post';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// TODO: use Route Handler
export const getPosts = async (): Promise<Post[]> => {
	return posts;
};

// TODO: use Route Handler
export const getPostById = async (id: number): Promise<Post | undefined> => {
	return posts.find((post: Post) => post.id === id);
};

// TODO: send user picture, email and fullname
export const insertNewPost = async (formData: FormData): Promise<void> => {
	// Check if the user is authenticated
	const { isAuthenticated } = getKindeServerSession();
	const isLoggedIn: boolean = await isAuthenticated();

	if (!isLoggedIn) redirect('/api/auth/login');

	// Validate the data
	const data = {
		title: formData.get('title') as string,
		description: formData.get('description') as string,
	};

	if (!data.title || !data.description) return;

	if (data.title === '' || data.description === '') return;

	// Insert a new post to the array
	const newPost: Post = {
		id: posts[posts.length - 1].id + 1,
		title: data.title,
		description: data.description,
	};

	// Update UI
	posts.push(newPost);
	revalidatePath('/home');

	redirect('/home');
};
