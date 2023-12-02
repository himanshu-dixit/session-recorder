/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	async headers() {
		return [
			{
				source: "/api/event",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "false" },
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,DELETE,PATCH,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
