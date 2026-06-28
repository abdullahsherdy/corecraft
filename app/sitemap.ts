import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity/client';
import { COURSE_SLUGS_QUERY, POST_SLUGS_QUERY } from '@/lib/sanity/queries';
import { SITE_URL } from '@/lib/site';

const lastModified = new Date();

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL,                 lastModified, changeFrequency: 'weekly',  priority: 1 },
  { url: `${SITE_URL}/courses`,    lastModified, changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${SITE_URL}/mentorship`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${SITE_URL}/about`,      lastModified, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE_URL}/contact`,    lastModified, changeFrequency: 'yearly', priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courseSlugs, postSlugs] = await Promise.all([
    sanityFetch<{ slug: string }>(COURSE_SLUGS_QUERY),
    sanityFetch<{ slug: string }>(POST_SLUGS_QUERY),
  ]);

  const courseRoutes: MetadataRoute.Sitemap = courseSlugs.map(({ slug }) => ({
    url: `${SITE_URL}/courses/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map(({ slug }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...postRoutes];
}
