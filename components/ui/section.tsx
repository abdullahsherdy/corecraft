import { cn } from '@/lib/utils';

interface SectionProps {
  children:   React.ReactNode;
  className?: string;
  dark?:      boolean;
}

export function Section({ children, className, dark = false }: SectionProps) {
  return (
    <section
      className={cn(
        'py-20 px-4',
        dark ? 'bg-brand-midnight text-white' : 'bg-white',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
