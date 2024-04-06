module.exports = {
	reactStrictMode: true,
  experimental: { esmExternals: false },
	images: {
    unoptimized: true,
    domains: ['scontent.cdninstagram.com', 'cdninstagram.com', 'mdbootstrap.com'],
  },
	async redirects() {
    return [
      {
        source: '/course-info',
        destination: '/classes',
        permanent: true,
      },
			{
        source: '/courses',
        destination: '/classes',
        permanent: true,
      }
    ]
  },
	// optimizeFonts: false,
};
