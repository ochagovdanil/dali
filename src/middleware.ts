import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

export default withAuth(
	async function middleware(_request: NextRequest) {
		// Nothing...
	},
	{
		isReturnToCurrentPage: true,
		loginPage: '/',
	}
);

// Protected routes (only for authenticated users)
export const config = {
	matcher: ['/home', '/new-post', '/post/:id*', '/admin'],
};
