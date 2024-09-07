import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';

const Navbar = dynamic(() => import('@/components/shared/Navbar'));

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: {
		default: 'DaLi - блог для всех',
		template: '%s | DaLi',
	},
	description: process.env.PUBLIC_NEXT_WEBSITE_CONTENT_DESCRIPTION,
};

interface RootLayoutProps {
	children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='ru'>
			<body className={`${inter.className} flex flex-col h-screen`}>
				<Navbar />
				<div className='flex-grow'>{children}</div>
			</body>
		</html>
	);
}
