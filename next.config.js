module.exports = {
	reactStrictMode: true,
  experimental: { esmExternals: false },
	images: {
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
