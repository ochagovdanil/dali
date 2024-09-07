/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'gravatar.com',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
};

export default nextConfig;
