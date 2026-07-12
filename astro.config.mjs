import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repository?.toLowerCase() === 'olenastakhova.github.io';

export default defineConfig({
  site: 'https://olenastakhova.github.io',
  // Project repositories live under /<repo>/; the special user-site repository
  // is published directly at the domain root.
  base: repository && !isUserSite ? `/${repository}` : '/',
});
