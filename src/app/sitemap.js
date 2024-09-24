import { getAllArticles } from '../../src/utils/mdx';

export default async function sitemap() {
  const blogPosts = await getAllArticles();

  return [
    {
      url: 'http://localhost:3000',
      lastModified: '2024-09-16',
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'http://localhost:3000/#about',
      lastModified: '2024-09-16',
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'http://localhost:3000/#skills',
      lastModified: '2024-09-16',
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'http://localhost:3000/#contact',
      lastModified: '2024-09-16',
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'http://localhost:3000/blog',
      lastModified: '2024-09-16',
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...blogPosts.map(({ slug, publishedAt }) => ({
      url: `http://localhost:3000/blog/${slug}`,
      lastModified: publishedAt,
      changeFrequency: 'yearly',
      priority: 0.5
    }))
  ];
}
