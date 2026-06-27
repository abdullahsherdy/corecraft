import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity/client';
import { COURSE_SLUGS_QUERY, POST_SLUGS_QUERY } from '@/lib/sanity/queries';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://corecraft.io';

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
  { url: `${BASE_URL}/courses`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE_URL}/mentorship`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog`,     lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
  { url: `${BASE_URL}/contact`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courseSlugs, postSlugs] = await Promise.all([
    sanityFetch<{ slug: string }>(COURSE_SLUGS_QUERY),
    sanityFetch<{ slug: string }>(POST_SLUGS_QUERY),
  ]);

  const courseRoutes: MetadataRoute.Sitemap = courseSlugs.map(({ slug }) => ({
    url: `${BASE_URL}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map(({ slug }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...postRoutes];
}
