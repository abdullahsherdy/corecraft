import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The CoreCraft page you requested could not be found.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="relative flex h-72 w-full max-w-md items-center justify-center overflow-hidden rounded-brand bg-brand-fog md:h-80">
          <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-brand-teal/15" />
          <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-brand-amber/20" />
          <div className="absolute right-16 top-12 rounded-lg border border-brand-navy/10 bg-white px-3 py-2 font-mono text-xs font-medium text-brand-navy shadow-sm">
            route.ts
          </div>
          <div className="absolute bottom-14 left-12 rounded-lg bg-brand-navy px-3 py-2 font-mono text-xs font-medium text-white shadow-sm">
            404
          </div>

          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-brand-navy/10 bg-white shadow-sm">
            <div className="absolute h-28 w-28 rounded-full border-8 border-brand-teal/20" />
            <Code2 className="h-16 w-16 text-brand-teal" aria-hidden="true" />
          </div>

          <div className="scan-line absolute left-1/2 top-0 h-full w-px bg-brand-amber" />
        </div>

        <div className="mt-8 w-full max-w-2xl space-y-4 px-2">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-teal">
            404
          </p>
          <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
            The page you are looking for does not exist or has been moved. Head back home and
            keep building with CoreCraft.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild className="gap-2 rounded-full px-7">
              <Link href="/">
                Go home
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-7">
              <Link href="/courses">Browse courses</Link>
            </Button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateX(-5rem); opacity: 0; }
          20%, 80% { opacity: 1; }
          50% { transform: translateX(5rem); }
        }

        .scan-line {
          animation: scan 2.6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .scan-line {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
