import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Resource coming soon',
    description: 'Read programming fundamentals explained clearly on the CoreCraft blog.',
    alternates: { canonical: `/blog/${params.slug}` },
    robots: { index: false, follow: true },
  };
}

function formatSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function BlogPostPage({ params }: Props) {
  return (
    <Section className="bg-brand-fog">
      <article className="mx-auto max-w-3xl text-center">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 rounded text-sm font-medium text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to resources
        </Link>
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
          Resource coming soon
        </p>
        <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
          {formatSlug(params.slug)}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
          This article is not published yet. In the meantime, you can explore the foundations track
          or ask a specific question about this topic.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/courses">Explore courses</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact" className="gap-2">
              Ask a question
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </article>
    </Section>
  );
}
