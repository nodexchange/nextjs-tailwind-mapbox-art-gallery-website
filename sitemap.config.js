/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://latinshine.co.uk',
  generateRobotsTxt: true, // (optional)
  exclude: ['/register', '/admin', '/api/insta', '/api/auth'],
  // ...other options
}

export default config