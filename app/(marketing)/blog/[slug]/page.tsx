import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
    description: `Read ${params.slug} on CoreCraft Blog.`,
  };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <Section>
      <article>
        <h1 className="text-5xl font-bold font-display text-brand-navy">{params.slug}</h1>
        <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
      </article>
    </Section>
  );
}
