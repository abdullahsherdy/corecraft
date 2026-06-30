import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The CoreCraft page you requested could not be found.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-[78vh] items-center justify-center overflow-hidden bg-white px-4 py-12">
      <section className="relative mx-auto grid w-full max-w-6xl items-center gap-10 overflow-hidden rounded-brand bg-brand-fog px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-14">
        <div className="absolute left-6 top-6 hidden rounded-full border border-brand-teal/30 bg-white px-3 py-1 font-mono text-xs font-medium text-brand-teal md:block">
          route: undefined
        </div>
        <div className="absolute right-6 top-6 hidden rounded-full bg-brand-amber/20 px-3 py-1 font-mono text-xs font-medium text-brand-navy md:block">
          status: hiding
        </div>

        <div className="relative order-2 text-center md:order-1 md:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-teal">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-brand-navy md:text-6xl">
            Oops. This page is hiding.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-navy/70 md:mx-0 md:text-lg">
            The route slipped under the table and the cat is pretending it saw nothing. Try a
            safer path back into CoreCraft.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild className="gap-2 rounded-full px-7">
              <Link href="/">
                <Home className="h-4 w-4" aria-hidden="true" />
                Go home
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2 rounded-full px-7">
              <Link href="/courses">
                <Search className="h-4 w-4" aria-hidden="true" />
                Browse courses
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-xl md:order-2">
          <div className="absolute -left-4 top-8 hidden rounded-[1rem_1rem_1rem_0] border border-brand-navy/10 bg-white px-4 py-3 shadow-sm sm:block">
            <p className="font-display text-sm font-medium text-brand-navy">You can't debug me.</p>
            <p className="mt-0.5 text-xs text-brand-navy/55">I have nine stack traces.</p>
          </div>
          <div className="rounded-brand border border-brand-navy/10 bg-white p-4 shadow-sm">
            <img
              src="/images/not-found-cat.svg"
              alt="A playful illustrated cat beside a 404 error scene"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
