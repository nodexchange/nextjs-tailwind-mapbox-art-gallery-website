/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://latinshine.co.uk',
  generateRobotsTxt: true, // (optional)
  exclude: ['/register', '/admin', '/api/insta', '/api/auth', '/account/profile', '/admin/customers', '/confirmation'],
  // ...other options
}
